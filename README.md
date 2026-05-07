# ExamPrep App

A clean, dark-themed MCQ practice tool for any kind of exam preparation.

## Project Structure

```
ExamPrep/
├── index.html          ← Main app (open this in browser)
├── css/
│   └── style.css       ← Dark cyber theme styles
├── js/
│   └── app.js          ← All quiz logic
└── data/
    └── questions.js    ← Question bank (edit this to update questions)
```

## Running Locally

Just open `index.html` in any modern browser — no server needed.

> **Note:** Some browsers block local JS file imports. If questions don't load,
> use VS Code's **Live Server** extension, or run:
> ```bash
> npx serve .
> ```

---

## Updating Questions

Edit `data/questions.js`. The format is:

```js
const QUESTIONS = [
  {
    "id": 1,
    "q": "Your question text here?",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D"
    },
    "answer": "B"
  },
  // ... more questions
];
```

Rules:
- `id` must be a unique number
- `answer` must be exactly `"A"`, `"B"`, `"C"`, or `"D"`
- The file must start with `const QUESTIONS = [` and end with `];`

---

## App Features

| Feature | Description |
|---------|-------------|
| **All mode** | Questions in original order |
| **Shuffled** | Randomized every session |
| **Missed** | Only questions you got wrong (persists across sessions via localStorage) |
| **Flash** | See question → think → reveal answer |
| **Jump** | Go directly to any question by ID or position |
| **Keyboard** | A/B/C/D to answer, ←/→ to navigate, Space to reveal flash |
| **Progress** | Live progress bar + score tracking |
| **Session review** | See all wrong answers at the end with correct answers |

---

## Tips for Exam Prep

1. Do one full pass in **Shuffled** mode
2. After finishing, switch to **Missed** mode to drill weak spots
3. On exam day, do a final pass in **Flash** mode for rapid review
