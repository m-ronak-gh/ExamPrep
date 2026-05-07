/* ── ExamPrep Quiz App ── */
'use strict';

const App = (() => {

  /* ─── State ─── */
  const state = {
    deck:     [],
    idx:      0,
    mode:     'all',
    answered: {},   // qId → chosen key (e.g. 'B')
    skipped:  new Set(),
    flashPhase: false,   // true = showing answer in flash mode
  };

  /* ─── Missed Questions Storage (localStorage) ─── */
  const Store = {
    key: 'exam_missed_v1',
    getMissed()  { try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch { return []; } },
    addMissed(id) {
      const m = this.getMissed();
      if (!m.includes(id)) { m.push(id); localStorage.setItem(this.key, JSON.stringify(m)); }
    },
    clearMissed() { localStorage.removeItem(this.key); },
  };

  /* ─── DOM refs ─── */
  const $ = id => document.getElementById(id);
  const el = {
    quizArea:     () => $('quiz-area'),
    progressFill: () => $('progress-fill'),
    progressPct:  () => $('progress-pct'),
    progressText: () => $('progress-text'),
    sCorrect:     () => $('s-correct'),
    sWrong:       () => $('s-wrong'),
    sSkip:        () => $('s-skip'),
    sTotal:       () => $('s-total'),
    toast:        () => $('toast'),
  };

  /* ─── Build Deck ─── */
  function buildDeck() {
    switch (state.mode) {
      case 'shuffle':
        state.deck = [...QUESTIONS].sort(() => Math.random() - 0.5);
        break;
      case 'missed': {
        const miss = Store.getMissed();
        state.deck = QUESTIONS.filter(q => miss.includes(q.id));
        if (!state.deck.length) {
          showToast('No missed questions yet — showing shuffled deck');
          state.deck = [...QUESTIONS].sort(() => Math.random() - 0.5);
        }
        break;
      }
      default:
        state.deck = [...QUESTIONS];
    }
    state.idx      = 0;
    state.answered = {};
    state.skipped  = new Set();
    state.flashPhase = false;
  }

  /* ─── Stats ─── */
  function calcStats() {
    let correct = 0, wrong = 0;
    for (const [idStr, chosen] of Object.entries(state.answered)) {
      const q = QUESTIONS.find(q => q.id === parseInt(idStr));
      if (!q) continue;
      if (chosen === q.answer) correct++; else wrong++;
    }
    return { correct, wrong, skipped: state.skipped.size, total: state.deck.length };
  }

  function updateStats() {
    const { correct, wrong, skipped, total } = calcStats();
    el.sCorrect().textContent = correct;
    el.sWrong().textContent   = wrong;
    el.sSkip().textContent    = skipped;
    el.sTotal().textContent   = total;

    const done = correct + wrong + skipped;
    const pct  = total ? Math.round(done / total * 100) : 0;
    el.progressFill().style.width = pct + '%';
    el.progressPct().textContent  = pct + '%';
    el.progressText().textContent = `${done} / ${total}`;
  }

  /* ─── Render ─── */
  function render() {
    updateStats();
    const area = el.quizArea();

    if (state.idx >= state.deck.length) {
      renderDone(area);
      return;
    }

    const q = state.deck[state.idx];
    const isAnswered = state.answered[q.id] !== undefined;

    if (state.mode === 'flash' && !state.flashPhase) {
      renderFlashFront(area, q);
      return;
    }
    if (state.mode === 'flash' && state.flashPhase) {
      renderFlashBack(area, q);
      return;
    }

    renderQuestion(area, q, isAnswered);
  }

  function renderQuestion(area, q, isAnswered) {
    const chosen = state.answered[q.id];

    const optionsHtml = ['A', 'B', 'C', 'D'].map(k => {
      let cls = 'option';
      if (isAnswered) {
        cls += ' disabled';
        if (k === q.answer)       cls += ' correct';
        else if (k === chosen)    cls += ' wrong';
      }
      return `<div class="${cls}" data-key="${k}" role="button" tabindex="${isAnswered ? -1 : 0}" aria-label="Option ${k}">
        <span class="opt-key">${k}</span>
        <span class="opt-text">${escHtml(q.options[k])}</span>
      </div>`;
    }).join('');

    const feedbackHtml = isAnswered
      ? `<div class="feedback show ${chosen === q.answer ? 'ok' : 'bad'}">
           <span class="feedback-icon">${chosen === q.answer ? '✓' : '✗'}</span>
           <span>${chosen === q.answer
             ? 'Correct!'
             : `Correct answer: <strong>${q.answer}</strong> — ${escHtml(q.options[q.answer])}`
           }</span>
         </div>`
      : `<div class="feedback"></div>`;

    area.innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-badge">Q ${state.idx + 1} of ${state.deck.length}</span>
          <span class="q-id">ID #${q.id}</span>
        </div>
        <p class="q-text">${escHtml(q.q)}</p>
        <div class="options-grid">${optionsHtml}</div>
        ${feedbackHtml}
      </div>
      <div class="nav-row">
        <button class="btn" id="btn-prev" ${state.idx === 0 ? 'disabled' : ''}>← Prev</button>
        <div style="display:flex;gap:8px;">
          ${!isAnswered ? `<button class="btn btn-ghost" id="btn-skip">Skip</button>` : ''}
          <button class="btn ${isAnswered ? 'btn-primary' : ''}" id="btn-next">
            ${state.idx === state.deck.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>`;

    bindNavEvents();
    if (!isAnswered) bindOptionEvents();
  }

  function renderFlashFront(area, q) {
    area.innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-badge">Flash ${state.idx + 1} / ${state.deck.length}</span>
          <span class="q-id">ID #${q.id}</span>
        </div>
        <p class="q-text">${escHtml(q.q)}</p>
        <button class="btn btn-primary" id="btn-reveal" style="margin-top:1rem">Reveal Answer</button>
      </div>
      <div class="nav-row">
        <button class="btn" id="btn-prev" ${state.idx === 0 ? 'disabled' : ''}>← Prev</button>
        <button class="btn" id="btn-next">Skip →</button>
      </div>`;

    $('btn-reveal').addEventListener('click', () => {
      state.flashPhase = true;
      render();
    });
    bindNavEvents();
  }

  function renderFlashBack(area, q) {
    area.innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-badge">Flash ${state.idx + 1} / ${state.deck.length}</span>
          <span class="q-id">ID #${q.id}</span>
        </div>
        <p class="q-text">${escHtml(q.q)}</p>
        <div class="flash-reveal-area show">
          <div class="flash-answer-key">${q.answer}</div>
          <div class="flash-answer-text">${escHtml(q.options[q.answer])}</div>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn" id="btn-prev" ${state.idx === 0 ? 'disabled' : ''}>← Prev</button>
        <button class="btn btn-primary" id="btn-next">
          ${state.idx === state.deck.length - 1 ? 'Finish' : 'Next →'}
        </button>
      </div>`;
    bindNavEvents();
  }

  function renderDone(area) {
    const { correct, wrong, skipped, total } = calcStats();
    const pct  = total ? Math.round(correct / (correct + wrong || 1) * 100) : 0;
    const grade = pct >= 90 ? '🔥' : pct >= 70 ? '⚡' : pct >= 50 ? '💡' : '📡';

    const miss = Store.getMissed();
    const reviewItems = state.deck
      .filter(q => state.answered[q.id] && state.answered[q.id] !== q.answer)
      .slice(0, 25);

    const reviewHtml = reviewItems.length
      ? `<div class="missed-review">
          <div class="review-title">// missed questions — review</div>
          ${reviewItems.map(q => `
            <div class="review-item">
              <div class="review-q"><strong>#${q.id}</strong>${escHtml(q.q)}</div>
              <div class="review-correct">✓ ${q.answer} — ${escHtml(q.options[q.answer])}</div>
            </div>`).join('')}
        </div>` : '';

    area.innerHTML = `
      <div class="q-card done-screen">
        <div class="done-icon">${grade}</div>
        <div class="done-score">${pct}%</div>
        <div class="done-label">accuracy</div>
        <div class="done-breakdown">
          <div class="done-stat ok">
            <div class="done-stat-val">${correct}</div>
            <div class="done-stat-lbl">Correct</div>
          </div>
          <div class="done-stat bad">
            <div class="done-stat-val">${wrong}</div>
            <div class="done-stat-lbl">Wrong</div>
          </div>
          <div class="done-stat sk">
            <div class="done-stat-val">${skipped}</div>
            <div class="done-stat-lbl">Skipped</div>
          </div>
          <div class="done-stat">
            <div class="done-stat-val" style="color:var(--accent)">${total}</div>
            <div class="done-stat-lbl">Total</div>
          </div>
        </div>
        <div class="done-actions">
          <button class="btn btn-primary" id="btn-restart">↺ Restart</button>
          <button class="btn btn-danger" id="btn-missed">Practice Missed</button>
          <button class="btn btn-ghost" id="btn-clear-missed">Clear Missed</button>
        </div>
        ${reviewHtml}
      </div>`;

    $('btn-restart').addEventListener('click', () => restart());
    $('btn-missed').addEventListener('click', () => setMode('missed'));
    $('btn-clear-missed').addEventListener('click', () => {
      Store.clearMissed();
      showToast('Missed questions cleared');
    });
  }

  /* ─── Bind Events ─── */
  function bindOptionEvents() {
    document.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', () => pickAnswer(opt.dataset.key));
      opt.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') pickAnswer(opt.dataset.key);
      });
    });
  }

  function bindNavEvents() {
    const prev = $('btn-prev');
    const next = $('btn-next');
    const skip = $('btn-skip');
    if (prev) prev.addEventListener('click', () => navigate(-1));
    if (next) next.addEventListener('click', () => navigate(1));
    if (skip) skip.addEventListener('click', () => {
      state.skipped.add(state.deck[state.idx].id);
      navigate(1);
    });
  }

  function pickAnswer(key) {
    const q = state.deck[state.idx];
    if (state.answered[q.id] !== undefined) return;
    state.answered[q.id] = key;
    if (key !== q.answer) Store.addMissed(q.id);
    updateStats();
    render();
  }

  function navigate(dir) {
    state.flashPhase = false;
    const newIdx = state.idx + dir;
    if (newIdx < 0) return;
    if (newIdx >= state.deck.length) {
      state.idx = state.deck.length;
    } else {
      state.idx = newIdx;
    }
    render();
  }

  /* ─── Mode switch ─── */
  function setMode(m) {
    state.mode = m;
    document.querySelectorAll('.mode-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === m);
    });
    buildDeck();
    render();
  }

  /* ─── Restart ─── */
  function restart() {
    buildDeck();
    render();
  }

  /* ─── Jump to question ─── */
  function jumpTo(val) {
    const n = parseInt(val);
    if (isNaN(n)) return;
    // Try ID match first
    let found = state.deck.findIndex(q => q.id === n);
    if (found < 0) found = n - 1; // fallback: position
    if (found >= 0 && found < state.deck.length) {
      state.idx = found;
      state.flashPhase = false;
      render();
      showToast(`Jumped to question ${found + 1}`);
    } else {
      showToast('Question not found in current deck');
    }
  }

  /* ─── Keyboard Shortcuts ─── */
  function initKeyboard() {
    document.addEventListener('keydown', e => {
      const tag = e.target.tagName;
      if (tag === 'INPUT') return;

      const q = state.deck[state.idx];
      if (!q) return;

      if (!state.answered[q.id] && state.mode !== 'flash') {
        if (['a','b','c','d'].includes(e.key.toLowerCase())) {
          pickAnswer(e.key.toUpperCase());
          return;
        }
      }

      if (e.key === 'ArrowRight' || e.key === 'l') navigate(1);
      if (e.key === 'ArrowLeft'  || e.key === 'h') navigate(-1);
      if (e.key === ' ' && state.mode === 'flash' && !state.flashPhase) {
        e.preventDefault();
        state.flashPhase = true;
        render();
      }
    });
  }

  /* ─── Toast ─── */
  let toastTimer;
  function showToast(msg) {
    const t = el.toast();
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  /* ─── Utility ─── */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ─── Init ─── */
  function init() {
    // Mode tab buttons
    document.querySelectorAll('.mode-tab').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });

    // Jump input
    const jumpInput = $('jump-input');
    const jumpBtn   = $('btn-jump');
    if (jumpBtn)   jumpBtn.addEventListener('click', () => jumpTo(jumpInput.value));
    if (jumpInput) jumpInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') jumpTo(jumpInput.value);
    });

    // Restart button in header area
    const restartBtn = $('btn-restart-header');
    if (restartBtn) restartBtn.addEventListener('click', () => restart());

    initKeyboard();
    buildDeck();
    render();
  }

  return { init, setMode, jumpTo, restart, showToast };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
