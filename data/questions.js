const QUESTIONS = [
  {
    "id": 1,
    "q": "Which feature of blockchain prevents double spending?",
    "options": {
      "A": "Encryption",
      "B": "Distributed ledger",
      "C": "Central authority",
      "D": "Cloud storage"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "q": "Which of the following is a key characteristic of a decentralized network?",
    "options": {
      "A": "Single point of control",
      "B": "Central database",
      "C": "Multiple independent nodes",
      "D": "Fixed server-client model"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "q": "Which hashing algorithm is used in Bitcoin mining?",
    "options": {
      "A": "MD5",
      "B": "SHA-1",
      "C": "SHA-256",
      "D": "AES"
    },
    "answer": "C"
  },
  {
    "id": 6,
    "q": "Which part of a block contains the reference to the previous block?",
    "options": {
      "A": "Nonce",
      "B": "Transaction data",
      "C": "Previous hash",
      "D": "Timestamp"
    },
    "answer": "C"
  },
  {
    "id": 7,
    "q": "Which concept ensures agreement among nodes in a blockchain network?",
    "options": {
      "A": "Encryption",
      "B": "Consensus mechanism",
      "C": "Hashing",
      "D": "Digital wallet"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "q": "What is the role of a nonce in blockchain?",
    "options": {
      "A": "Stores transaction data",
      "B": "Identifies users",
      "C": "Helps in mining process",
      "D": "Encrypts messages"
    },
    "answer": "C"
  },
  {
    "id": 9,
    "q": "Which of the following is NOT a type of blockchain?",
    "options": {
      "A": "Public",
      "B": "Private",
      "C": "Consortium",
      "D": "Sequential"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "q": "Which property ensures that it is computationally infeasible to reverse a hash?",
    "options": {
      "A": "Collision resistance",
      "B": "Pre-image resistance",
      "C": "Determinism",
      "D": "Avalanche effect"
    },
    "answer": "B"
  },
  {
    "id": 11,
    "q": "In public key cryptography, which key is shared openly?  \fA) Private key B) Public key C) Session key D) Secret key Answer: B  Q12. What is the main function of miners in Bitcoin?",
    "options": {
      "A": "Store user passwords",
      "B": "Validate transactions and create blocks",
      "C": "Encrypt user data",
      "D": "Manage wallets"
    },
    "answer": "B"
  },
  {
    "id": 13,
    "q": "Which attack attempts to find two different inputs producing the same hash?",
    "options": {
      "A": "Brute force attack",
      "B": "Collision attack",
      "C": "Replay attack",
      "D": "Sybil attack"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "q": "What determines whether a miner successfully mines a block in Bitcoin?",
    "options": {
      "A": "Number of transactions",
      "B": "Solving a cryptographic puzzle",
      "C": "Network speed",
      "D": "User identity"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "q": "Which factor directly affects the cost of generating a block in Bitcoin?",
    "options": {
      "A": "Number of users",
      "B": "Mining difficulty and computational power",
      "C": "Number of wallets",
      "D": "Size of blockchain"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "q": "Which of the following best describes a permissionless blockchain?",
    "options": {
      "A": "Only authorized users can participate",
      "B": "Controlled by government",
      "C": "Anyone can join and validate transactions",
      "D": "Requires identity verification"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "q": "What is the main purpose of a block header?",
    "options": {
      "A": "Store full transaction data",
      "B": "Contain metadata for block identification",
      "C": "Store private keys",
      "D": "Encrypt transactions"
    },
    "answer": "B"
  },
  {
    "id": 20,
    "q": "Which of the following is included in a Bitcoin transaction?",
    "options": {
      "A": "Sender’s IP address",
      "B": "Input and output addresses",
      "C": "Password",
      "D": "Timestamp only"
    },
    "answer": "B"
  },
  {
    "id": 23,
    "q": "Which of the following best explains block propagation?",
    "options": {
      "A": "Creating new transactions",
      "B": "Sending mined blocks across the network",
      "C": "Encrypting block data",
      "D": "Storing blocks locally"
    },
    "answer": "B"
  },
  {
    "id": 24,
    "q": "Which situation leads to the formation of multiple chains in blockchain?",
    "options": {
      "A": "Slow transaction",
      "B": "Simultaneous mining of blocks",
      "C": "Network shutdown",
      "D": "Encryption failure"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "q": "What is the main goal of Nakamoto Consensus?",
    "options": {
      "A": "Increase storage capacity",
      "B": "Achieve agreement in a decentralized network",
      "C": "Reduce transaction fees",
      "D": "Improve encryption"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "q": "Which of the following best describes the “longest chain rule”?",
    "options": {
      "A": "Chain with most users wins",
      "B": "Chain with highest computational work is accepted",
      "C": "Chain with fastest transactions is accepted",
      "D": "Chain with smallest blocks is accepted"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "q": "Which of the following is a key limitation of Proof of Work?",
    "options": {
      "A": "Low security",
      "B": "High energy consumption",
      "C": "No decentralization",
      "D": "No mining rewards"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "q": "What is the main function of transaction inputs in Bitcoin?",
    "options": {
      "A": "Define sender’s balance",
      "B": "Specify source of funds",
      "C": "Store transaction fees",
      "D": "Encrypt data"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "q": "Which consensus mechanism selects validators based on the amount of cryptocurrency they lock as collateral?",
    "options": {
      "A": "Proof of Work",
      "B": "Proof of Stake",
      "C": "Proof of Burn",
      "D": "Proof of Authority"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "q": "What happens to coins in a Proof of Burn system?",
    "options": {
      "A": "They are transferred to another user",
      "B": "They are permanently removed from circulation",
      "C": "They are locked temporarily",
      "D": "They are doubled"
    },
    "answer": "B"
  },
  {
    "id": 33,
    "q": "Which of the following best describes Ethereum?",
    "options": {
      "A": "A centralized database system",
      "B": "A distributed computing platform supporting smart contracts",
      "C": "A file storage system",
      "D": "A networking protocol only"
    },
    "answer": "B"
  },
  {
    "id": 34,
    "q": "What is “gas limit” in Ethereum?",
    "options": {
      "A": "Maximum number of transactions per block",
      "B": "Maximum computational effort allowed for a transaction",
      "C": "Total balance in a wallet",
      "D": "Network speed limit"
    },
    "answer": "B"
  },
  {
    "id": 37,
    "q": "Which of the following is a key feature of Proof of Stake compared to Proof of Work?",
    "options": {
      "A": "Requires more electricity",
      "B": "Requires specialized hardware",
      "C": "Energy-efficient validation",
      "D": "Uses hash puzzles"
    },
    "answer": "C"
  },
  {
    "id": 38,
    "q": "Which type of fault involves nodes behaving maliciously or arbitrarily in a distributed system?",
    "options": {
      "A": "Crash fault",
      "B": "Timing fault",
      "C": "Byzantine fault",
      "D": "Logical fault"
    },
    "answer": "C"
  },
  {
    "id": 39,
    "q": "What is the main goal of consensus algorithms like Paxos?",
    "options": {
      "A": "Encrypt transactions",
      "B": "Ensure all nodes agree on a single value",
      "C": "Reduce transaction cost",
      "D": "Speed up mining"
    },
    "answer": "B"
  },
  {
    "id": 40,
    "q": "In Ethereum, what does a transaction nonce represent?",
    "options": {
      "A": "Block number",
      "B": "Number of transactions sent by an account",
      "C": "Gas price",
      "D": "Hash value"
    },
    "answer": "B"
  },
  {
    "id": 41,
    "q": "Which of the following best describes state machine replication?",
    "options": {
      "A": "Copying data across servers without synchronization",
      "B": "Maintaining identical state across distributed nodes",
      "C": "Encrypting data across systems",
      "D": "Creating backup files"
    },
    "answer": "B"
  },
  {
    "id": 42,
    "q": "What is the role of validators in Ethereum PoS?  \fA) Encrypt transactions B) Store private keys C) Propose and validate blocks D) Manage wallets Answer: C  Q43. Which of the following is a disadvantage of Proof of Burn?",
    "options": {
      "A": "High energy consumption",
      "B": "Loss of usable cryptocurrency",
      "C": "Requires mining hardware",
      "D": "Slow transaction speed"
    },
    "answer": "B"
  },
  {
    "id": 44,
    "q": "What ensures that Ethereum smart contracts execute identically on all nodes?",
    "options": {
      "A": "Central server",
      "B": "Deterministic EVM execution",
      "C": "User authentication",
      "D": "Mining rewards"
    },
    "answer": "B"
  },
  {
    "id": 47,
    "q": "In PBFT, what is the maximum number of faulty nodes tolerated in a network of 3f+1 nodes?",
    "options": {
      "A": "f",
      "B": "2f",
      "C": "f + 1",
      "D": "3f"
    },
    "answer": "A"
  },
  {
    "id": 48,
    "q": "Which organization oversees the development of Hyperledger projects?",
    "options": {
      "A": "Ethereum Foundation",
      "B": "Linux Foundation",
      "C": "Bitcoin Foundation",
      "D": "Apache Foundation"
    },
    "answer": "B"
  },
  {
    "id": 49,
    "q": "What is the main purpose of Hyperledger Fabric Test Network?",
    "options": {
      "A": "Mining cryptocurrencies",
      "B": "Testing and deploying applications in a controlled environment",
      "C": "Encrypting transactions",
      "D": "Managing wallets"
    },
    "answer": "B"
  },
  {
    "id": 50,
    "q": "Which component in Hyperledger Fabric is responsible for packaging and deploying smart contracts?",
    "options": {
      "A": "Orderer",
      "B": "Peer",
      "C": "Chaincode lifecycle",
      "D": "Channel"
    },
    "answer": "C"
  },
  {
    "id": 51,
    "q": "What does a decentralized application (DApp) primarily rely on?",
    "options": {
      "A": "Centralized servers",
      "B": "Blockchain network and smart contracts",
      "C": "Cloud storage only",
      "D": "Database management system"
    },
    "answer": "B"
  },
  {
    "id": 54,
    "q": "Which of the following is TRUE about Byzantine Agreement protocols?",
    "options": {
      "A": "All nodes must be honest",
      "B": "They work only in centralized systems",
      "C": "They tolerate faulty or malicious nodes",
      "D": "They eliminate communication"
    },
    "answer": "C"
  },
  {
    "id": 55,
    "q": "What is the role of the ordering service in Hyperledger Fabric?",
    "options": {
      "A": "Validate transactions",
      "B": "Execute smart contracts",
      "C": "Order transactions into blocks",
      "D": "Store private keys"
    },
    "answer": "C"
  },
  {
    "id": 56,
    "q": "Which phase in PBFT ensures that all nodes agree on the same request before execution?",
    "options": {
      "A": "Commit phase",
      "B": "Pre-prepare phase",
      "C": "Prepare phase",
      "D": "Verification phase"
    },
    "answer": "C"
  },
  {
    "id": 57,
    "q": "Which scalability approach improves performance without modifying the base blockchain layer?",
    "options": {
      "A": "Layer 2 solutions",
      "B": "Hard fork",
      "C": "Mining optimization",
      "D": "Hashing"
    },
    "answer": "A"
  },
  {
    "id": 58,
    "q": "What is a key feature of Bitcoin-NG compared to traditional Bitcoin?",
    "options": {
      "A": "No mining required",
      "B": "Separation of leader election and transaction serialization",
      "C": "Fully centralized control",
      "D": "Uses Proof of Stake"
    },
    "answer": "B"
  },
  {
    "id": 59,
    "q": "Which of the following ensures faster agreement in CoSi (Collective Signing)?  \fA) Sequential signature process B) Aggregated signatures from multiple nodes C) Central authority approval D) Single node validation Answer: B  Q60. What is the main purpose of writing chaincode in Hyperledger Fabric?",
    "options": {
      "A": "Mining blocks",
      "B": "Defining business logic for transactions",
      "C": "Encrypting data",
      "D": "Managing network nodes"
    },
    "answer": "B"
  },
  {
    "id": 61,
    "q": "Which of the following best defines a Decentralized Identifier (DID)?",
    "options": {
      "A": "A username stored in a database",
      "B": "A globally unique identifier controlled by a central authority",
      "C": "A self-owned identifier without reliance on a central authority",
      "D": "A password-based identity"
    },
    "answer": "C"
  },
  {
    "id": 64,
    "q": "What ensures that a Verifiable Credential has not been tampered with?",
    "options": {
      "A": "Timestamp",
      "B": "Digital signature",
      "C": "Password",
      "D": "Hashchain"
    },
    "answer": "B"
  },
  {
    "id": 65,
    "q": "Which of the following is a feature of decentralized identity compared to centralized identity?",
    "options": {
      "A": "Requires central database",
      "B": "User has no control",
      "C": "Identity is portable and user-controlled",
      "D": "Depends on a single server"
    },
    "answer": "C"
  },
  {
    "id": 66,
    "q": "Which of the following is necessary for secure cross-chain asset transfer?",
    "options": {
      "A": "Same blockchain protocol",
      "B": "Interoperability mechanisms",
      "C": "Central authority approval",
      "D": "Fixed transaction fees"
    },
    "answer": "B"
  },
  {
    "id": 67,
    "q": "What is the primary function of a timelock in blockchain transactions?",
    "options": {
      "A": "Encrypt data",
      "B": "Restrict transaction execution to a specific time",
      "C": "Store identity",
      "D": "Increase transaction speed"
    },
    "answer": "B"
  },
  {
    "id": 68,
    "q": "Which of the following describes atomic asset exchange?",
    "options": {
      "A": "Partial transfer of assets",
      "B": "All-or-nothing transfer of assets",
      "C": "Delayed transaction",
      "D": "Centralized transfer"
    },
    "answer": "B"
  },
  {
    "id": 71,
    "q": "What is the role of a verifier in a Verifiable Credential system?",
    "options": {
      "A": "Issue credentials",
      "B": "Store credentials",
      "C": "Validate credentials presented by a holder",
      "D": "Mine blocks"
    },
    "answer": "C"
  },
  {
    "id": 72,
    "q": "Which of the following best describes interoperability in blockchain?",
    "options": {
      "A": "Storing data in one chain",
      "B": "Interaction between multiple blockchain systems",
      "C": "Increasing block size",
      "D": "Encrypting transactions"
    },
    "answer": "B"
  },
  {
    "id": 73,
    "q": "Which mechanism ensures that a transaction either completes fully or fails entirely in cross-chain exchange?",
    "options": {
      "A": "Hashing",
      "B": "Atomic swap",
      "C": "Mining",
      "D": "Encryption"
    },
    "answer": "B"
  },
  {
    "id": 74,
    "q": "Which of the following is a benefit of using blockchain for identity verification?",
    "options": {
      "A": "Reduced transparency",
      "B": "Increased centralization",
      "C": "Tamper-proof records",
      "D": "Higher dependency on intermediaries"
    },
    "answer": "C"
  },
  {
    "id": 75,
    "q": "Which of the following is a disadvantage of relying on a trusted third party in asset transfer?",
    "options": {
      "A": "Faster transactions",
      "B": "Reduced cost",
      "C": "Single point of failure",
      "D": "Increased decentralization"
    },
    "answer": "C"
  },
  {
    "id": 76,
    "q": "Which of the following best describes a Sybil attack in blockchain?  \fA) Mining multiple blocks simultaneously B) Creating multiple fake identities to control the network C) Stealing private keys D) Delaying transactions Answer: B  Q77. What is the main purpose of network security mechanisms in blockchain?",
    "options": {
      "A": "Increase transaction fees",
      "B": "Prevent unauthorized access and attacks",
      "C": "Speed up mining",
      "D": "Reduce storage"
    },
    "answer": "B"
  },
  {
    "id": 78,
    "q": "Which of the following is a common vulnerability in smart contracts?",
    "options": {
      "A": "High energy consumption",
      "B": "Coding errors or bugs",
      "C": "Lack of encryption",
      "D": "Slow execution"
    },
    "answer": "B"
  },
  {
    "id": 79,
    "q": "Which of the following best describes a replay attack?",
    "options": {
      "A": "Modifying transaction data",
      "B": "Reusing a valid transaction in another context",
      "C": "Blocking network nodes",
      "D": "Creating fake blocks"
    },
    "answer": "B"
  },
  {
    "id": 80,
    "q": "Which blockchain application is most suitable for voting systems?",
    "options": {
      "A": "Data encryption",
      "B": "Transparent and tamper-proof record keeping",
      "C": "High transaction speed",
      "D": "Centralized storage"
    },
    "answer": "B"
  },
  {
    "id": 81,
    "q": "What is a major limitation of blockchain in real-world applications?",
    "options": {
      "A": "Lack of decentralization",
      "B": "Scalability issues",
      "C": "No security",
      "D": "No transparency"
    },
    "answer": "B"
  },
  {
    "id": 82,
    "q": "Which of the following is a potential risk in decentralized applications (DApps)?",
    "options": {
      "A": "Central control",
      "B": "Smart contract vulnerabilities",
      "C": "Lack of users",
      "D": "No data storage"
    },
    "answer": "B"
  },
  {
    "id": 83,
    "q": "Which of the following blockchain use cases is related to intellectual property protection?",
    "options": {
      "A": "Voting system",
      "B": "Supply chain tracking",
      "C": "Digital rights management",
      "D": "Banking"
    },
    "answer": "C"
  },
  {
    "id": 84,
    "q": "Which type of attack attempts to manipulate transaction ordering for profit?",
    "options": {
      "A": "Eclipse attack",
      "B": "Replay attack",
      "C": "Front-running variant attack",
      "D": "Sybil attack"
    },
    "answer": "C"
  },
  {
    "id": 85,
    "q": "Which of the following industries benefits from blockchain for fraud detection?",
    "options": {
      "A": "Agriculture",
      "B": "Finance",
      "C": "Transportation",
      "D": "Gaming"
    },
    "answer": "B"
  },
  {
    "id": 86,
    "q": "What is the primary goal of blockchain security measures?  \fA) Increase mining difficulty B) Ensure confidentiality, integrity, and availability C) Reduce decentralization D) Increase block size Answer: B  Q87. Which of the following best describes permissionless blockchain risks?",
    "options": {
      "A": "Controlled access",
      "B": "Lack of trust among participants",
      "C": "Open participation leading to malicious nodes",
      "D": "Limited scalability"
    },
    "answer": "C"
  },
  {
    "id": 88,
    "q": "Which of the following is an example of blockchain use in logistics?",
    "options": {
      "A": "Password management",
      "B": "Tracking goods across supply chain",
      "C": "Email communication",
      "D": "Social networking"
    },
    "answer": "B"
  },
  {
    "id": 89,
    "q": "What is the role of encryption in blockchain security?",
    "options": {
      "A": "Increase transaction speed",
      "B": "Protect data confidentiality",
      "C": "Reduce mining difficulty",
      "D": "Store transactions"
    },
    "answer": "B"
  },
  {
    "id": 90,
    "q": "Which of the following is a major concern when blockchain is used in IoT systems?",
    "options": {
      "A": "High decentralization",
      "B": "Limited connectivity and scalability",
      "C": "Lack of devices",
      "D": "No encryption"
    },
    "answer": "B"
  },
  {
    "id": 91,
    "q": "What is the first block in a blockchain called?",
    "options": {
      "A": "Root block",
      "B": "Parent block",
      "C": "Genesis block",
      "D": "Initial node"
    },
    "answer": "C"
  },
  {
    "id": 92,
    "q": "Which blockchain property ensures that the same input always produces the same hash?",
    "options": {
      "A": "Avalanche effect",
      "B": "Determinism",
      "C": "Collision resistance",
      "D": "Consensus"
    },
    "answer": "B"
  },
  {
    "id": 93,
    "q": "Which component connects one block to another in a blockchain?",
    "options": {
      "A": "Timestamp",
      "B": "Previous block hash",
      "C": "Nonce",
      "D": "Wallet address"
    },
    "answer": "B"
  },
  {
    "id": 94,
    "q": "What is the primary purpose of hashing in blockchain?",
    "options": {
      "A": "Compressing videos",
      "B": "Securing data integrity",
      "C": "Increasing internet speed",
      "D": "Managing databases"
    },
    "answer": "B"
  },
  {
    "id": 95,
    "q": "Which of the following is an example of a public blockchain?",
    "options": {
      "A": "Hyperledger Fabric",
      "B": "Bitcoin",
      "C": "Private ERP Network",
      "D": "Intranet System"
    },
    "answer": "B"
  },
  {
    "id": 98,
    "q": "Which Ethereum token standard is commonly used for NFTs?",
    "options": {
      "A": "ERC-20",
      "B": "ERC-721",
      "C": "ERC-1155",
      "D": "ERC-777"
    },
    "answer": "B"
  },
  {
    "id": 99,
    "q": "What is the primary advantage of smart contracts?",
    "options": {
      "A": "Manual processing",
      "B": "Automated execution without intermediaries",
      "C": "Centralized management",
      "D": "Reduced transparency"
    },
    "answer": "B"
  },
  {
    "id": 100,
    "q": "Which blockchain feature helps maintain transparency?",
    "options": {
      "A": "Private storage",
      "B": "Shared distributed ledger",
      "C": "Password encryption only",
      "D": "Centralized database"
    },
    "answer": "B"
  },
  {
    "id": 101,
    "q": "What is the main purpose of a Merkle Tree in blockchain?",
    "options": {
      "A": "Encrypt transactions",
      "B": "Efficiently verify transaction integrity",
      "C": "Store passwords",
      "D": "Increase mining speed"
    },
    "answer": "B"
  },
  {
    "id": 102,
    "q": "What does the Merkle Root represent?",
    "options": {
      "A": "First transaction in the block",
      "B": "Combined hash of all transactions",
      "C": "Wallet address of miner",
      "D": "Previous block hash"
    },
    "answer": "B"
  },
  {
    "id": 103,
    "q": "If one transaction changes in a Merkle Tree, what happens?",
    "options": {
      "A": "Nothing changes",
      "B": "Only one node changes",
      "C": "Merkle Root changes completely",
      "D": "Blockchain stops working"
    },
    "answer": "C"
  },
  {
    "id": 104,
    "q": "Which of the following is included in a block header?",
    "options": {
      "A": "Merkle Root",
      "B": "Smart contract code",
      "C": "User password",
      "D": "Email address"
    },
    "answer": "A"
  },
  {
    "id": 105,
    "q": "What is the function of the timestamp in a block?",
    "options": {
      "A": "Identifies miner",
      "B": "Records block creation time",
      "C": "Stores gas fee",
      "D": "Encrypts transactions"
    },
    "answer": "B"
  },
  {
    "id": 106,
    "q": "Which field is repeatedly changed during mining to obtain a valid hash?",
    "options": {
      "A": "Merkle Root",
      "B": "Timestamp",
      "C": "Nonce",
      "D": "Wallet address"
    },
    "answer": "C"
  },
  {
    "id": 107,
    "q": "What happens when a block is successfully mined?  \fA) It is discarded B) It is added to the blockchain C) It becomes a wallet D) It is encrypted permanently Answer: B  Q108. What is block propagation?",
    "options": {
      "A": "Deleting old blocks",
      "B": "Sharing newly mined blocks across the network",
      "C": "Encrypting transactions",
      "D": "Compressing blockchain data"
    },
    "answer": "B"
  },
  {
    "id": 109,
    "q": "What is a blockchain fork?",
    "options": {
      "A": "Encryption failure",
      "B": "Splitting of blockchain into multiple chains",
      "C": "Wallet synchronization",
      "D": "Hash reversal"
    },
    "answer": "B"
  },
  {
    "id": 110,
    "q": "Which type of fork is backward compatible?",
    "options": {
      "A": "Hard fork",
      "B": "Soft fork",
      "C": "Network fork",
      "D": "Mining fork"
    },
    "answer": "B"
  },
  {
    "id": 111,
    "q": "What does UTXO stand for in Bitcoin?",
    "options": {
      "A": "Universal Transaction Output",
      "B": "Unspent Transaction Output",
      "C": "Unified Transfer Output",
      "D": "User Token Output"
    },
    "answer": "B"
  },
  {
    "id": 112,
    "q": "What is the main purpose of the UTXO model?",
    "options": {
      "A": "Store private keys",
      "B": "Track spendable outputs",
      "C": "Encrypt transactions",
      "D": "Reduce mining power"
    },
    "answer": "B"
  },
  {
    "id": 113,
    "q": "What does a Bitcoin wallet primarily store?",
    "options": {
      "A": "Bitcoins themselves",
      "B": "Private and public keys",
      "C": "Mining hardware",
      "D": "Blockchain blocks"
    },
    "answer": "B"
  },
  {
    "id": 114,
    "q": "Which key is used to sign Bitcoin transactions?  \fA) Public key B) Session key C) Private key D) Shared key Answer: C  Q115. What is the purpose of a Bitcoin address?",
    "options": {
      "A": "Encrypt blocks",
      "B": "Identify destination for payments",
      "C": "Mine cryptocurrency",
      "D": "Generate hashes"
    },
    "answer": "B"
  },
  {
    "id": 116,
    "q": "What is the mempool in Bitcoin?",
    "options": {
      "A": "Pool of miners",
      "B": "Collection of unconfirmed transactions",
      "C": "Set of wallets",
      "D": "Group of validators"
    },
    "answer": "B"
  },
  {
    "id": 117,
    "q": "What is transaction confirmation?",
    "options": {
      "A": "Transaction deletion",
      "B": "Inclusion of transaction into a block",
      "C": "Wallet creation",
      "D": "Password verification"
    },
    "answer": "B"
  },
  {
    "id": 118,
    "q": "What is double spending?",
    "options": {
      "A": "Spending the same cryptocurrency twice",
      "B": "Paying double fees",
      "C": "Mining two blocks together",
      "D": "Sending two wallets"
    },
    "answer": "A"
  },
  {
    "id": 119,
    "q": "Which blockchain feature prevents double spending?",
    "options": {
      "A": "Cloud storage",
      "B": "Distributed consensus",
      "C": "Email verification",
      "D": "Central authority"
    },
    "answer": "B"
  },
  {
    "id": 120,
    "q": "Why are transaction fees important in Bitcoin?",
    "options": {
      "A": "They increase wallet storage",
      "B": "They reward miners for validating transactions",
      "C": "They encrypt transactions",
      "D": "They reduce block size"
    },
    "answer": "B"
  },
  {
    "id": 121,
    "q": "Who proposed Ethereum?  \fA) Satoshi Nakamoto B) Vitalik Buterin C) Gavin Wood D) Hal Finney Answer: B  Q122. What is a smart contract?",
    "options": {
      "A": "Physical agreement",
      "B": "Self-executing program on blockchain",
      "C": "Wallet application",
      "D": "Mining software"
    },
    "answer": "B"
  },
  {
    "id": 123,
    "q": "What does EVM stand for?",
    "options": {
      "A": "Ethereum Virtual Machine",
      "B": "Electronic Verification Machine",
      "C": "Encrypted Virtual Module",
      "D": "Ethereum Verification Mechanism"
    },
    "answer": "A"
  },
  {
    "id": 124,
    "q": "What is gas in Ethereum?",
    "options": {
      "A": "Cryptocurrency wallet",
      "B": "Fee required for computation and transactions",
      "C": "Hash function",
      "D": "Mining pool"
    },
    "answer": "B"
  },
  {
    "id": 125,
    "q": "What is the purpose of Solidity?",
    "options": {
      "A": "Blockchain mining",
      "B": "Writing Ethereum smart contracts",
      "C": "Encrypting wallets",
      "D": "Verifying transactions"
    },
    "answer": "B"
  },
  {
    "id": 126,
    "q": "Which Ethereum token standard is commonly used for fungible tokens?",
    "options": {
      "A": "ERC-20",
      "B": "ERC-721",
      "C": "ERC-1155",
      "D": "ERC-777"
    },
    "answer": "A"
  },
  {
    "id": 127,
    "q": "Which token standard is commonly associated with NFTs?",
    "options": {
      "A": "ERC-20",
      "B": "ERC-721",
      "C": "ERC-777",
      "D": "ERC-884"
    },
    "answer": "B"
  },
  {
    "id": 128,
    "q": "What is the role of validators in Ethereum Proof of Stake?  \fA) Encrypt blocks B) Validate and propose blocks C) Manage wallets D) Store passwords Answer: B  Q129. What is staking in Proof of Stake?",
    "options": {
      "A": "Destroying coins",
      "B": "Locking cryptocurrency to participate in validation",
      "C": "Encrypting transactions",
      "D": "Splitting blocks"
    },
    "answer": "B"
  },
  {
    "id": 130,
    "q": "What is slashing in Proof of Stake?",
    "options": {
      "A": "Reward distribution",
      "B": "Penalty for malicious validator behavior",
      "C": "Increasing block size",
      "D": "Compressing transactions"
    },
    "answer": "B"
  },
  {
    "id": 131,
    "q": "What is a Sybil attack?",
    "options": {
      "A": "Manipulating transaction order",
      "B": "Creating multiple fake identities in the network",
      "C": "Encrypting wallets",
      "D": "Reversing hashes"
    },
    "answer": "B"
  },
  {
    "id": 132,
    "q": "What is a replay attack?",
    "options": {
      "A": "Modifying transaction amount",
      "B": "Reusing a valid transaction maliciously",
      "C": "Breaking encryption",
      "D": "Mining duplicate blocks"
    },
    "answer": "B"
  },
  {
    "id": 133,
    "q": "What is phishing mainly used for in blockchain systems?",
    "options": {
      "A": "Increasing mining speed",
      "B": "Stealing credentials or private keys",
      "C": "Reducing transaction fees",
      "D": "Compressing blockchain"
    },
    "answer": "B"
  },
  {
    "id": 134,
    "q": "What is a 51% attack?",
    "options": {
      "A": "Attack on wallets",
      "B": "Control of majority mining power by one entity",
      "C": "Transaction flooding",
      "D": "Password cracking"
    },
    "answer": "B"
  },
  {
    "id": 135,
    "q": "Which blockchain property improves security against tampering?  \fA) Centralization B) Immutability C) Password storage D) Cloud hosting Answer: B  Q136. What is front-running in blockchain?",
    "options": {
      "A": "Delaying transactions intentionally",
      "B": "Manipulating transaction order for profit",
      "C": "Encrypting transactions",
      "D": "Mining empty blocks"
    },
    "answer": "B"
  },
  {
    "id": 137,
    "q": "Why are smart contract audits important?",
    "options": {
      "A": "To increase mining speed",
      "B": "To identify vulnerabilities and bugs",
      "C": "To create new tokens",
      "D": "To reduce decentralization"
    },
    "answer": "B"
  },
  {
    "id": 140,
    "q": "Which attack isolates a node by controlling its incoming and outgoing connections?",
    "options": {
      "A": "Sybil attack",
      "B": "Eclipse attack",
      "C": "Collision attack",
      "D": "DDoS attack"
    },
    "answer": "B"
  },
  {
    "id": 141,
    "q": "Which industry commonly uses blockchain for supply chain tracking?",
    "options": {
      "A": "Agriculture and logistics",
      "B": "Entertainment only",
      "C": "Gaming only",
      "D": "Social media only"
    },
    "answer": "A"
  },
  {
    "id": 142,
    "q": "How can blockchain help healthcare systems?",
    "options": {
      "A": "By deleting medical records",
      "B": "By securely sharing medical data",
      "C": "By increasing centralization",
      "D": "By reducing transparency"
    },
    "answer": "B"
  },
  {
    "id": 143,
    "q": "Which blockchain application is useful for voting systems?",
    "options": {
      "A": "Tamper-proof vote recording",
      "B": "Password management only",
      "C": "File compression",
      "D": "Gaming rewards"
    },
    "answer": "A"
  },
  {
    "id": 144,
    "q": "What is DeFi?",
    "options": {
      "A": "Decentralized Finance",
      "B": "Distributed File system",
      "C": "Digital Firewall",
      "D": "Data Federation"
    },
    "answer": "A"
  },
  {
    "id": 147,
    "q": "What is the purpose of blockchain interoperability?",
    "options": {
      "A": "Reduce block size",
      "B": "Enable communication between different blockchains",
      "C": "Remove decentralization",
      "D": "Increase mining cost"
    },
    "answer": "B"
  },
  {
    "id": 148,
    "q": "What is an atomic swap?",
    "options": {
      "A": "Partial asset transfer",
      "B": "All-or-nothing cross-chain exchange",
      "C": "Wallet synchronization",
      "D": "Mining optimization"
    },
    "answer": "B"
  },
  {
    "id": 149,
    "q": "What is the purpose of Layer 2 solutions?",
    "options": {
      "A": "Increase mining rewards",
      "B": "Improve blockchain scalability and speed",
      "C": "Replace smart contracts",
      "D": "Centralize blockchain"
    },
    "answer": "B"
  },
  {
    "id": 150,
    "q": "What is sharding in blockchain?",
    "options": {
      "A": "Encrypting transactions",
      "B": "Splitting blockchain network into smaller parts for scalability",
      "C": "Reducing mining rewards",
      "D": "Deleting blocks"
    },
    "answer": "B"
  },
  {
    "id": 151,
    "q": "Which type of blockchain is open to everyone?",
    "options": {
      "A": "Private blockchain",
      "B": "Consortium blockchain",
      "C": "Public blockchain",
      "D": "Hybrid blockchain"
    },
    "answer": "C"
  },
  {
    "id": 154,
    "q": "What is the primary objective of consensus mechanisms?",
    "options": {
      "A": "Encrypt user passwords",
      "B": "Achieve agreement among distributed nodes",
      "C": "Reduce blockchain size",
      "D": "Increase transaction fees"
    },
    "answer": "B"
  },
  {
    "id": 155,
    "q": "What is the avalanche effect in cryptographic hash functions?",
    "options": {
      "A": "Same output for different inputs",
      "B": "Small input change causing major output change",
      "C": "Ability to reverse hashes",
      "D": "Compression of blockchain"
    },
    "answer": "B"
  },
  {
    "id": 156,
    "q": "What is collision resistance in hashing?",
    "options": {
      "A": "Easy generation of same hashes",
      "B": "Difficulty in finding two inputs with same output hash",
      "C": "Reversible hash generation",
      "D": "Random block generation"
    },
    "answer": "B"
  },
  {
    "id": 157,
    "q": "What is pre-image resistance?",
    "options": {
      "A": "Ability to reverse a hash easily",
      "B": "Difficulty in determining original input from hash output",
      "C": "Creating duplicate transactions",
      "D": "Compressing blockchain data"
    },
    "answer": "B"
  },
  {
    "id": 158,
    "q": "What is the role of a digital signature in blockchain?",
    "options": {
      "A": "Increase mining speed",
      "B": "Provide authenticity and non-repudiation",
      "C": "Reduce transaction size",
      "D": "Compress wallet data"
    },
    "answer": "B"
  },
  {
    "id": 161,
    "q": "Which cryptographic technique is mainly used for confidentiality in blockchain systems?",
    "options": {
      "A": "Symmetric encryption",
      "B": "Public key cryptography",
      "C": "Hashing only",
      "D": "Compression"
    },
    "answer": "B"
  },
  {
    "id": 162,
    "q": "Which key is used to verify a digital signature?",
    "options": {
      "A": "Private key",
      "B": "Public key",
      "C": "Session key",
      "D": "Shared key"
    },
    "answer": "B"
  },
  {
    "id": 163,
    "q": "Which property ensures that a sender cannot deny sending a transaction?",
    "options": {
      "A": "Availability",
      "B": "Non-repudiation",
      "C": "Scalability",
      "D": "Transparency"
    },
    "answer": "B"
  },
  {
    "id": 164,
    "q": "What is the primary purpose of hashing in blockchain?",
    "options": {
      "A": "Store passwords permanently",
      "B": "Ensure integrity of data",
      "C": "Increase transaction fees",
      "D": "Compress blocks"
    },
    "answer": "B"
  },
  {
    "id": 165,
    "q": "Which algorithm is commonly used for Bitcoin digital signatures?",
    "options": {
      "A": "AES",
      "B": "DES",
      "C": "ECDSA",
      "D": "RSA"
    },
    "answer": "C"
  },
  {
    "id": 168,
    "q": "Which of the following is NOT a cryptographic hash function?",
    "options": {
      "A": "SHA-256",
      "B": "MD5",
      "C": "AES",
      "D": "SHA-1"
    },
    "answer": "C"
  },
  {
    "id": 169,
    "q": "What is the main weakness of MD5 and SHA-1 today?",
    "options": {
      "A": "Very slow execution",
      "B": "Vulnerability to collisions",
      "C": "High storage requirement",
      "D": "Large key size"
    },
    "answer": "B"
  },
  {
    "id": 170,
    "q": "What is a collision in hashing?",
    "options": {
      "A": "Two inputs producing the same hash",
      "B": "One hash producing two outputs",
      "C": "Hash reversal",
      "D": "Transaction duplication"
    },
    "answer": "A"
  },
  {
    "id": 171,
    "q": "Which consensus mechanism is used by Bitcoin?",
    "options": {
      "A": "Proof of Stake",
      "B": "Proof of Work",
      "C": "PBFT",
      "D": "Delegated PoS"
    },
    "answer": "B"
  },
  {
    "id": 172,
    "q": "Which consensus mechanism is more energy efficient?",
    "options": {
      "A": "Proof of Work",
      "B": "Proof of Stake",
      "C": "Mining Pools",
      "D": "Hashcash"
    },
    "answer": "B"
  },
  {
    "id": 175,
    "q": "What is Delegated Proof of Stake (DPoS)?",
    "options": {
      "A": "Validators are elected by token holders",
      "B": "Mining through GPUs",
      "C": "Random validator selection",
      "D": "Centralized validation"
    },
    "answer": "A"
  },
  {
    "id": 176,
    "q": "Which consensus protocol tolerates Byzantine faults?",
    "options": {
      "A": "PBFT",
      "B": "HTTP",
      "C": "FTP",
      "D": "SMTP"
    },
    "answer": "A"
  },
  {
    "id": 177,
    "q": "What is the main disadvantage of Proof of Work?",
    "options": {
      "A": "Lack of decentralization",
      "B": "High energy consumption",
      "C": "No transaction validation",
      "D": "Weak cryptography"
    },
    "answer": "B"
  },
  {
    "id": 178,
    "q": "Which property ensures that all honest nodes agree on the same blockchain state?",
    "options": {
      "A": "Safety",
      "B": "Scalability",
      "C": "Compression",
      "D": "Privacy"
    },
    "answer": "A"
  },
  {
    "id": 179,
    "q": "Which property ensures the system eventually continues processing transactions?",
    "options": {
      "A": "Integrity",
      "B": "Availability",
      "C": "Liveness",
      "D": "Transparency"
    },
    "answer": "C"
  },
  {
    "id": 180,
    "q": "Which consensus algorithm is commonly used in enterprise blockchains?  \fA) Proof of Work B) PBFT C) Hashcash D) Proof of Burn Answer: B  Q181. Hyperledger Fabric is mainly designed for:",
    "options": {
      "A": "Public cryptocurrency mining",
      "B": "Enterprise blockchain applications",
      "C": "Gaming applications",
      "D": "Video streaming"
    },
    "answer": "B"
  },
  {
    "id": 182,
    "q": "Which organization maintains Hyperledger projects?",
    "options": {
      "A": "Bitcoin Foundation",
      "B": "Ethereum Foundation",
      "C": "Linux Foundation",
      "D": "Oracle Foundation"
    },
    "answer": "C"
  },
  {
    "id": 183,
    "q": "What is chaincode in Hyperledger Fabric?",
    "options": {
      "A": "Mining software",
      "B": "Smart contract/business logic",
      "C": "Wallet application",
      "D": "Consensus protocol"
    },
    "answer": "B"
  },
  {
    "id": 184,
    "q": "Which node type orders transactions into blocks in Hyperledger Fabric?",
    "options": {
      "A": "Peer",
      "B": "Orderer",
      "C": "Validator",
      "D": "Miner"
    },
    "answer": "B"
  },
  {
    "id": 185,
    "q": "What is a channel in Hyperledger Fabric?",
    "options": {
      "A": "Public blockchain explorer",
      "B": "Private communication subnet between participants",
      "C": "Cryptocurrency wallet",
      "D": "Mining pool"
    },
    "answer": "B"
  },
  {
    "id": 186,
    "q": "What is the role of a peer node in Hyperledger Fabric?",
    "options": {
      "A": "Store ledger and execute chaincode",
      "B": "Mine cryptocurrency",
      "C": "Generate hashes only",
      "D": "Encrypt blocks"
    },
    "answer": "A"
  },
  {
    "id": 187,
    "q": "What does MSP stand for in Hyperledger Fabric?  \fA) Membership Service Provider B) Mining Service Protocol C) Main Security Process D) Message Signing Platform Answer: A  Q188. Which feature makes Hyperledger Fabric suitable for enterprises?",
    "options": {
      "A": "Anonymous access",
      "B": "Permissioned participation",
      "C": "Public mining rewards",
      "D": "Open cryptocurrency trading"
    },
    "answer": "B"
  },
  {
    "id": 189,
    "q": "What is endorsement policy in Hyperledger Fabric?",
    "options": {
      "A": "Mining rule",
      "B": "Rule defining required peer approvals for transactions",
      "C": "Wallet recovery mechanism",
      "D": "Consensus replacement algorithm"
    },
    "answer": "B"
  },
  {
    "id": 190,
    "q": "Which language can be used to write chaincode in Hyperledger Fabric?",
    "options": {
      "A": "Go",
      "B": "JavaScript",
      "C": "Java",
      "D": "All of the above"
    },
    "answer": "D"
  },
  {
    "id": 191,
    "q": "What is a reentrancy attack?",
    "options": {
      "A": "Attack using repeated smart contract calls before state update",
      "B": "Double spending attack",
      "C": "Mining attack",
      "D": "Wallet cloning attack"
    },
    "answer": "A"
  },
  {
    "id": 192,
    "q": "What is integer overflow in smart contracts?",
    "options": {
      "A": "Transaction duplication",
      "B": "Value exceeding maximum storage limit",
      "C": "Network delay",
      "D": "Block collision"
    },
    "answer": "B"
  },
  {
    "id": 193,
    "q": "What is integer underflow?",
    "options": {
      "A": "Value going below minimum allowed limit",
      "B": "Increasing gas fee",
      "C": "Transaction flooding",
      "D": "Wallet synchronization"
    },
    "answer": "A"
  },
  {
    "id": 194,
    "q": "What is the purpose of smart contract auditing?",
    "options": {
      "A": "Increase mining power",
      "B": "Identify vulnerabilities and bugs",
      "C": "Reduce decentralization",
      "D": "Increase gas price"
    },
    "answer": "B"
  },
  {
    "id": 195,
    "q": "Which vulnerability occurs due to improper access restrictions?",
    "options": {
      "A": "Replay attack",
      "B": "Access control vulnerability",
      "C": "Sybil attack",
      "D": "Eclipse attack"
    },
    "answer": "B"
  },
  {
    "id": 196,
    "q": "Why are immutable smart contracts risky?",
    "options": {
      "A": "Bugs cannot be easily fixed after deployment",
      "B": "They reduce transparency",
      "C": "They stop mining",
      "D": "They remove consensus"
    },
    "answer": "A"
  },
  {
    "id": 199,
    "q": "Which practice improves smart contract security?",
    "options": {
      "A": "Ignoring testing",
      "B": "Publicly sharing private keys",
      "C": "Code review and auditing",
      "D": "Disabling access control"
    },
    "answer": "C"
  },
  {
    "id": 200,
    "q": "What is gas optimization in Ethereum?",
    "options": {
      "A": "Reducing computational cost of smart contracts",
      "B": "Increasing mining power",
      "C": "Encrypting blocks",
      "D": "Deleting transactions"
    },
    "answer": "A"
  },
  {
    "id": 201,
    "q": "Which application uses blockchain for transparent product tracking?",
    "options": {
      "A": "Supply chain management",
      "B": "Social networking",
      "C": "Gaming",
      "D": "Video editing"
    },
    "answer": "A"
  },
  {
    "id": 202,
    "q": "How can blockchain improve healthcare systems?",
    "options": {
      "A": "Secure sharing of medical records",
      "B": "Deleting patient data",
      "C": "Increasing centralization",
      "D": "Removing encryption"
    },
    "answer": "A"
  },
  {
    "id": 203,
    "q": "Why is blockchain useful in voting systems?",
    "options": {
      "A": "Votes can be altered easily",
      "B": "Provides tamper-resistant records",
      "C": "Requires no verification",
      "D": "Depends on central authority"
    },
    "answer": "B"
  },
  {
    "id": 206,
    "q": "How does blockchain help educational institutions?",
    "options": {
      "A": "Certificate verification",
      "B": "Mining cryptocurrency",
      "C": "Password cracking",
      "D": "Removing records"
    },
    "answer": "A"
  },
  {
    "id": 207,
    "q": "What is a major use of blockchain in logistics?",
    "options": {
      "A": "Tracking movement of goods",
      "B": "Gaming rewards",
      "C": "Email management",
      "D": "Image processing"
    },
    "answer": "A"
  },
  {
    "id": 208,
    "q": "How does blockchain support intellectual property protection?",
    "options": {
      "A": "Tamper-proof ownership records",
      "B": "Reducing transparency",
      "C": "Deleting copyrights",
      "D": "Removing signatures"
    },
    "answer": "A"
  },
  {
    "id": 209,
    "q": "Which blockchain application is commonly associated with decentralized finance?",
    "options": {
      "A": "DeFi",
      "B": "FTP",
      "C": "VPN",
      "D": "DNS"
    },
    "answer": "A"
  },
  {
    "id": 210,
    "q": "What is a stablecoin?",
    "options": {
      "A": "Cryptocurrency with stable value linked to assets",
      "B": "Mining hardware",
      "C": "Smart contract language",
      "D": "Hash algorithm"
    },
    "answer": "A"
  },
  {
    "id": 211,
    "q": "What is tokenization in blockchain?  \fA) Encrypting files B) Representing assets digitally as blockchain tokens C) Compressing transactions D) Deleting blocks Answer: B  Q212. What is an NFT?",
    "options": {
      "A": "Fungible cryptocurrency",
      "B": "Unique digital asset token",
      "C": "Consensus mechanism",
      "D": "Hashing algorithm"
    },
    "answer": "B"
  },
  {
    "id": 213,
    "q": "Which token standard is mainly used for NFTs on Ethereum?",
    "options": {
      "A": "ERC-20",
      "B": "ERC-721",
      "C": "ERC-777",
      "D": "ERC-1155"
    },
    "answer": "B"
  },
  {
    "id": 214,
    "q": "What is a DAO?",
    "options": {
      "A": "Digital Access Organization",
      "B": "Decentralized Autonomous Organization",
      "C": "Distributed Authentication Operation",
      "D": "Data Access Object"
    },
    "answer": "B"
  },
  {
    "id": 215,
    "q": "What is staking?",
    "options": {
      "A": "Locking cryptocurrency to support validation",
      "B": "Burning cryptocurrency",
      "C": "Encrypting blocks",
      "D": "Deleting wallets"
    },
    "answer": "A"
  },
  {
    "id": 216,
    "q": "What is slashing in PoS systems?",
    "options": {
      "A": "Rewarding validators",
      "B": "Penalizing malicious validators",
      "C": "Compressing blockchain",
      "D": "Increasing gas fees"
    },
    "answer": "B"
  },
  {
    "id": 217,
    "q": "What is interoperability in blockchain?",
    "options": {
      "A": "Communication between multiple blockchain networks",
      "B": "Wallet synchronization only",
      "C": "Mining optimization",
      "D": "Block compression"
    },
    "answer": "A"
  },
  {
    "id": 218,
    "q": "What is an atomic swap?  \fA) Partial transfer of assets B) Direct cross-chain exchange without intermediaries C) Mining reward mechanism D) Wallet encryption Answer: B  Q219. What is the purpose of Layer 2 solutions?",
    "options": {
      "A": "Increase scalability and transaction speed",
      "B": "Replace blockchain completely",
      "C": "Remove cryptography",
      "D": "Increase mining costs"
    },
    "answer": "A"
  },
  {
    "id": 220,
    "q": "What is sharding in blockchain?",
    "options": {
      "A": "Dividing the network into smaller partitions for scalability",
      "B": "Encrypting transaction data",
      "C": "Reversing hashes",
      "D": "Deleting blocks"
    },
    "answer": "A"
  },
  {
    "id": 221,
    "q": "Which feature makes blockchain resistant to data modification?",
    "options": {
      "A": "Centralized servers",
      "B": "Linked hashes between blocks",
      "C": "Password protection",
      "D": "Cloud backup"
    },
    "answer": "B"
  },
  {
    "id": 222,
    "q": "What is decentralization in blockchain?",
    "options": {
      "A": "Control by one authority",
      "B": "Distribution of control among multiple nodes",
      "C": "Storage on one server",
      "D": "Manual transaction approval"
    },
    "answer": "B"
  },
  {
    "id": 223,
    "q": "Which component uniquely identifies a block?",
    "options": {
      "A": "Timestamp",
      "B": "Block hash",
      "C": "Wallet address",
      "D": "Gas fee"
    },
    "answer": "B"
  },
  {
    "id": 224,
    "q": "What happens if the previous hash stored in a block is altered?",
    "options": {
      "A": "Nothing changes",
      "B": "Blockchain integrity breaks",
      "C": "Mining becomes faster",
      "D": "Wallet balances reset"
    },
    "answer": "B"
  },
  {
    "id": 227,
    "q": "What is the role of nodes in blockchain?",
    "options": {
      "A": "Validate and relay transactions",
      "B": "Encrypt passwords only",
      "C": "Generate gas fees",
      "D": "Delete invalid blocks"
    },
    "answer": "A"
  },
  {
    "id": 228,
    "q": "What is the purpose of distributed ledgers?",
    "options": {
      "A": "Centralized storage",
      "B": "Shared synchronized record keeping",
      "C": "Reducing transparency",
      "D": "Limiting transaction access"
    },
    "answer": "B"
  },
  {
    "id": 229,
    "q": "Which blockchain feature removes dependency on intermediaries?",
    "options": {
      "A": "Central authority",
      "B": "Decentralization",
      "C": "Password encryption",
      "D": "Cloud storage"
    },
    "answer": "B"
  },
  {
    "id": 230,
    "q": "Which blockchain characteristic ensures records remain permanent?",
    "options": {
      "A": "Immutability",
      "B": "Compression",
      "C": "Virtualization",
      "D": "Centralization"
    },
    "answer": "A"
  },
  {
    "id": 231,
    "q": "What is mining difficulty in Bitcoin?",
    "options": {
      "A": "Number of users in network",
      "B": "Complexity of solving cryptographic puzzles",
      "C": "Wallet storage limit",
      "D": "Transaction size limit"
    },
    "answer": "B"
  },
  {
    "id": 234,
    "q": "What is block reward halving in Bitcoin?",
    "options": {
      "A": "Decreasing mining difficulty",
      "B": "Reducing miner rewards periodically",
      "C": "Doubling transaction fees",
      "D": "Removing validators"
    },
    "answer": "B"
  },
  {
    "id": 235,
    "q": "What is the purpose of transaction inputs?",
    "options": {
      "A": "Specify source of funds",
      "B": "Encrypt transaction data",
      "C": "Store gas fees",
      "D": "Create block hashes"
    },
    "answer": "A"
  },
  {
    "id": 236,
    "q": "What is the purpose of transaction outputs?",
    "options": {
      "A": "Define destination and amount",
      "B": "Store mining rewards",
      "C": "Compress blocks",
      "D": "Encrypt wallets"
    },
    "answer": "A"
  },
  {
    "id": 237,
    "q": "What is coinbase transaction in Bitcoin?",
    "options": {
      "A": "First transaction in a mined block rewarding miner",
      "B": "Wallet synchronization process",
      "C": "Transaction replay mechanism",
      "D": "Block compression algorithm"
    },
    "answer": "A"
  },
  {
    "id": 238,
    "q": "What is transaction propagation?",
    "options": {
      "A": "Broadcasting transactions to network nodes",
      "B": "Encrypting transactions",
      "C": "Deleting invalid transactions",
      "D": "Compressing transaction history"
    },
    "answer": "A"
  },
  {
    "id": 241,
    "q": "What is the role of Ethereum Virtual Machine (EVM)?",
    "options": {
      "A": "Execute smart contracts",
      "B": "Mine Bitcoin",
      "C": "Compress blocks",
      "D": "Store passwords"
    },
    "answer": "A"
  },
  {
    "id": 242,
    "q": "Which Ethereum token standard supports both fungible and non-fungible tokens?",
    "options": {
      "A": "ERC-20",
      "B": "ERC-721",
      "C": "ERC-1155",
      "D": "ERC-777"
    },
    "answer": "C"
  },
  {
    "id": 243,
    "q": "What is gas fee in Ethereum mainly used for?",
    "options": {
      "A": "Rewarding validators and paying computational cost",
      "B": "Encrypting wallets",
      "C": "Compressing blockchain",
      "D": "Generating private keys"
    },
    "answer": "A"
  },
  {
    "id": 244,
    "q": "What is the purpose of smart contracts in decentralized applications?",
    "options": {
      "A": "Automate execution of agreements",
      "B": "Increase mining difficulty",
      "C": "Remove cryptography",
      "D": "Delete invalid transactions"
    },
    "answer": "A"
  },
  {
    "id": 245,
    "q": "Which programming language is mainly associated with Ethereum smart contracts?",
    "options": {
      "A": "Python",
      "B": "Solidity",
      "C": "Java",
      "D": "PHP"
    },
    "answer": "B"
  },
  {
    "id": 246,
    "q": "What is an externally owned account (EOA) in Ethereum?  \fA) Account controlled by private keys B) Smart contract account C) Mining account D) Exchange account only Answer: A  Q247. What controls a contract account in Ethereum?",
    "options": {
      "A": "Passwords",
      "B": "Smart contract code",
      "C": "Central authority",
      "D": "Mining pools"
    },
    "answer": "B"
  },
  {
    "id": 248,
    "q": "What happens if gas limit is insufficient for a transaction?",
    "options": {
      "A": "Transaction succeeds partially",
      "B": "Transaction fails",
      "C": "Blockchain stops",
      "D": "Wallet gets deleted"
    },
    "answer": "B"
  },
  {
    "id": 249,
    "q": "Why are smart contracts considered trustless?",
    "options": {
      "A": "They execute automatically without intermediaries",
      "B": "They require no cryptography",
      "C": "They eliminate nodes",
      "D": "They prevent hashing"
    },
    "answer": "A"
  },
  {
    "id": 250,
    "q": "Which Ethereum upgrade transitioned Ethereum toward Proof of Stake?",
    "options": {
      "A": "Frontier",
      "B": "Byzantium",
      "C": "The Merge",
      "D": "Istanbul"
    },
    "answer": "C"
  },
  {
    "id": 251,
    "q": "What is an Eclipse attack?",
    "options": {
      "A": "Isolating a node from the honest network",
      "B": "Breaking hash functions",
      "C": "Stealing private keys",
      "D": "Creating NFTs"
    },
    "answer": "A"
  },
  {
    "id": 252,
    "q": "What is the primary target of phishing attacks in blockchain systems?",
    "options": {
      "A": "Private keys and credentials",
      "B": "Block headers",
      "C": "Smart contracts only",
      "D": "Mining pools"
    },
    "answer": "A"
  },
  {
    "id": 253,
    "q": "What is transaction malleability?  \fA) Ability to modify transaction identifier before confirmation B) Encrypting transactions C) Deleting wallet addresses D) Compressing blocks Answer: A  Q254. Which attack manipulates transaction order for financial gain?",
    "options": {
      "A": "Replay attack",
      "B": "Front-running attack",
      "C": "Sybil attack",
      "D": "Eclipse attack"
    },
    "answer": "B"
  },
  {
    "id": 255,
    "q": "What is the purpose of multi-signature wallets?",
    "options": {
      "A": "Require multiple approvals for transactions",
      "B": "Increase mining speed",
      "C": "Reduce blockchain size",
      "D": "Replace consensus algorithms"
    },
    "answer": "A"
  },
  {
    "id": 256,
    "q": "What is a cold wallet?",
    "options": {
      "A": "Offline cryptocurrency wallet",
      "B": "Mining software",
      "C": "Blockchain explorer",
      "D": "Smart contract platform"
    },
    "answer": "A"
  },
  {
    "id": 257,
    "q": "Which wallet type is generally safer from online attacks?",
    "options": {
      "A": "Hot wallet",
      "B": "Cold wallet",
      "C": "Web wallet",
      "D": "Exchange wallet"
    },
    "answer": "B"
  },
  {
    "id": 258,
    "q": "What is the purpose of hardware wallets?",
    "options": {
      "A": "Secure storage of private keys offline",
      "B": "Mining cryptocurrency",
      "C": "Creating smart contracts",
      "D": "Managing gas fees"
    },
    "answer": "A"
  },
  {
    "id": 259,
    "q": "What does two-factor authentication improve in blockchain wallets?",
    "options": {
      "A": "Mining speed",
      "B": "Security against unauthorized access",
      "C": "Block propagation",
      "D": "Smart contract execution"
    },
    "answer": "B"
  },
  {
    "id": 260,
    "q": "Why should private keys never be shared?  \fA) They authorize ownership and transactions B) They increase transaction fees C) They reduce security only slightly D) They store public hashes Answer: A  Q261. What is decentralized finance (DeFi)?",
    "options": {
      "A": "Financial services built on blockchain networks",
      "B": "Centralized banking platform",
      "C": "Offline payment gateway",
      "D": "Cloud storage system"
    },
    "answer": "A"
  },
  {
    "id": 262,
    "q": "What is yield farming in DeFi?",
    "options": {
      "A": "Growing mining hardware",
      "B": "Earning rewards by providing liquidity",
      "C": "Encrypting transactions",
      "D": "Creating wallets"
    },
    "answer": "B"
  },
  {
    "id": 263,
    "q": "What is liquidity in DeFi?",
    "options": {
      "A": "Availability of assets for trading",
      "B": "Number of miners",
      "C": "Wallet password strength",
      "D": "Block size"
    },
    "answer": "A"
  },
  {
    "id": 264,
    "q": "What is a decentralized exchange (DEX)?",
    "options": {
      "A": "Exchange operating without central authority",
      "B": "Traditional stock exchange",
      "C": "Government-controlled bank",
      "D": "Mining marketplace"
    },
    "answer": "A"
  },
  {
    "id": 265,
    "q": "Which protocol allows lending and borrowing in DeFi?",
    "options": {
      "A": "Smart contract protocol",
      "B": "DNS protocol",
      "C": "HTTP protocol",
      "D": "SMTP protocol"
    },
    "answer": "A"
  },
  {
    "id": 266,
    "q": "What is impermanent loss in DeFi?",
    "options": {
      "A": "Loss due to temporary price fluctuations in liquidity pools",
      "B": "Mining hardware failure",
      "C": "Wallet password leakage",
      "D": "Transaction deletion"
    },
    "answer": "A"
  },
  {
    "id": 267,
    "q": "Which blockchain feature enables DeFi platforms?  \fA) Smart contracts B) Cloud databases C) Centralized servers D) Email verification Answer: A  Q268. What is collateral in DeFi lending?",
    "options": {
      "A": "Asset locked to secure a loan",
      "B": "Mining reward",
      "C": "Transaction fee",
      "D": "Hash output"
    },
    "answer": "A"
  },
  {
    "id": 269,
    "q": "What is a governance token?",
    "options": {
      "A": "Token allowing holders to vote on protocol decisions",
      "B": "Mining hardware token",
      "C": "Password protection token",
      "D": "Gas optimization token"
    },
    "answer": "A"
  },
  {
    "id": 270,
    "q": "What is Total Value Locked (TVL) in DeFi?",
    "options": {
      "A": "Total assets locked in DeFi protocols",
      "B": "Total number of miners",
      "C": "Wallet password count",
      "D": "Block propagation speed"
    },
    "answer": "A"
  },
  {
    "id": 271,
    "q": "What does NFT stand for?",
    "options": {
      "A": "Non-Fungible Token",
      "B": "Network Function Token",
      "C": "New Financial Transfer",
      "D": "Non-Final Transaction"
    },
    "answer": "A"
  },
  {
    "id": 272,
    "q": "Why are NFTs considered unique?",
    "options": {
      "A": "Each token has distinct metadata and ownership",
      "B": "They use centralized servers",
      "C": "They replace blockchains",
      "D": "They remove cryptography"
    },
    "answer": "A"
  },
  {
    "id": 273,
    "q": "Which sector commonly uses NFTs?",
    "options": {
      "A": "Digital art and collectibles",
      "B": "File compression",
      "C": "Email systems",
      "D": "Operating systems"
    },
    "answer": "A"
  },
  {
    "id": 274,
    "q": "What is a DAO?  \fA) Decentralized Autonomous Organization B) Distributed Access Operation C) Data Allocation Object D) Decentralized Application Output Answer: A  Q275. How are decisions generally made in a DAO?",
    "options": {
      "A": "Through voting mechanisms",
      "B": "By one central authority",
      "C": "By miners only",
      "D": "Through email approval"
    },
    "answer": "A"
  },
  {
    "id": 276,
    "q": "What is Web3 mainly associated with?",
    "options": {
      "A": "Decentralized internet applications",
      "B": "Centralized cloud computing",
      "C": "Traditional web hosting",
      "D": "File compression"
    },
    "answer": "A"
  },
  {
    "id": 277,
    "q": "Which technology forms the foundation of Web3?",
    "options": {
      "A": "Blockchain",
      "B": "Relational databases",
      "C": "Email protocols",
      "D": "FTP servers"
    },
    "answer": "A"
  },
  {
    "id": 278,
    "q": "What is a metaverse economy commonly based on?",
    "options": {
      "A": "Blockchain and digital assets",
      "B": "Paper-based records",
      "C": "Offline databases",
      "D": "Telephone networks"
    },
    "answer": "A"
  },
  {
    "id": 279,
    "q": "What is the purpose of governance voting in DAOs?",
    "options": {
      "A": "Decide protocol upgrades and policies",
      "B": "Encrypt transactions",
      "C": "Mine new blocks",
      "D": "Delete smart contracts"
    },
    "answer": "A"
  },
  {
    "id": 280,
    "q": "Which blockchain feature supports ownership verification of NFTs?",
    "options": {
      "A": "Immutable distributed ledger",
      "B": "Centralized databases",
      "C": "Cloud storage only",
      "D": "Password encryption only"
    },
    "answer": "A"
  },
  {
    "id": 283,
    "q": "Which hashing algorithm is used in Bitcoin mining?",
    "options": {
      "A": "MD5",
      "B": "SHA-1",
      "C": "SHA-256",
      "D": "AES"
    },
    "answer": "C"
  },
  {
    "id": 284,
    "q": "What happens if the input of a hash function is slightly changed?",
    "options": {
      "A": "Output remains same",
      "B": "Output changes significantly",
      "C": "Output becomes zero",
      "D": "Output increases linearly"
    },
    "answer": "B"
  },
  {
    "id": 285,
    "q": "Which of the following best describes immutability in blockchain?",
    "options": {
      "A": "Data can be edited anytime",
      "B": "Data cannot be altered once added",
      "C": "Data is stored temporarily",
      "D": "Data is deleted periodically"
    },
    "answer": "B"
  },
  {
    "id": 286,
    "q": "Which part of a block contains the reference to the previous block?",
    "options": {
      "A": "Nonce",
      "B": "Transaction data",
      "C": "Previous hash",
      "D": "Timestamp"
    },
    "answer": "C"
  },
  {
    "id": 287,
    "q": "Which concept ensures agreement among nodes in a blockchain network?",
    "options": {
      "A": "Encryption",
      "B": "Consensus mechanism",
      "C": "Hashing",
      "D": "Digital wallet"
    },
    "answer": "B"
  },
  {
    "id": 290,
    "q": "Which property ensures that it is computationally infeasible to reverse a hash?",
    "options": {
      "A": "Collision resistance",
      "B": "Pre-image resistance",
      "C": "Determinism",
      "D": "Avalanche effect"
    },
    "answer": "B"
  },
  {
    "id": 291,
    "q": "In public key cryptography, which key is shared openly?",
    "options": {
      "A": "Private key",
      "B": "Public key",
      "C": "Session key",
      "D": "Secret key"
    },
    "answer": "B"
  },
  {
    "id": 292,
    "q": "What is the main function of miners in Bitcoin?",
    "options": {
      "A": "Store user passwords",
      "B": "Validate transactions and create blocks",
      "C": "Encrypt user data",
      "D": "Manage wallets"
    },
    "answer": "B"
  },
  {
    "id": 293,
    "q": "Which attack attempts to find two different inputs producing the same hash?",
    "options": {
      "A": "Brute force attack",
      "B": "Collision attack",
      "C": "Replay attack",
      "D": "Sybil attack"
    },
    "answer": "B"
  },
  {
    "id": 294,
    "q": "Which layer is responsible for peer-to-peer communication in blockchain?",
    "options": {
      "A": "Application layer",
      "B": "Network layer",
      "C": "Consensus layer",
      "D": "Data layer"
    },
    "answer": "B"
  },
  {
    "id": 295,
    "q": "What is the main advantage of using blockchain over traditional databases?",
    "options": {
      "A": "Faster computation",
      "B": "Centralized control",
      "C": "Transparency and trust",
      "D": "Reduced storage"
    },
    "answer": "C"
  },
  {
    "id": 296,
    "q": "What determines whether a miner successfully mines a block in Bitcoin?",
    "options": {
      "A": "Number of transactions",
      "B": "Solving a cryptographic puzzle",
      "C": "Network speed",
      "D": "User identity"
    },
    "answer": "B"
  },
  {
    "id": 297,
    "q": "Which factor directly affects the cost of generating a block in Bitcoin?",
    "options": {
      "A": "Number of users",
      "B": "Mining difficulty and computational power",
      "C": "Number of wallets",
      "D": "Size of blockchain"
    },
    "answer": "B"
  },
  {
    "id": 300,
    "q": "Which of the following is included in a Bitcoin transaction?",
    "options": {
      "A": "Sender’s IP address",
      "B": "Input and output addresses",
      "C": "Password",
      "D": "Timestamp only"
    },
    "answer": "B"
  },
  {
    "id": 301,
    "q": "What is the role of Bitcoin Script?",
    "options": {
      "A": "Mining new coins",
      "B": "Defining conditions to spend bitcoins",
      "C": "Encrypting blocks",
      "D": "Managing wallets"
    },
    "answer": "B"
  },
  {
    "id": 302,
    "q": "What happens during transaction flooding in a blockchain network?",
    "options": {
      "A": "Transactions are deleted",
      "B": "Transactions are broadcast to all nodes",
      "C": "Transactions are encrypted",
      "D": "Transactions are rejected"
    },
    "answer": "B"
  },
  {
    "id": 303,
    "q": "Which of the following best explains block propagation?",
    "options": {
      "A": "Creating new transactions",
      "B": "Sending mined blocks across the network",
      "C": "Encrypting block data",
      "D": "Storing blocks locally"
    },
    "answer": "B"
  },
  {
    "id": 304,
    "q": "Which situation leads to the formation of multiple chains in blockchain?",
    "options": {
      "A": "Slow transaction",
      "B": "Simultaneous mining of blocks",
      "C": "Network shutdown",
      "D": "Encryption failure"
    },
    "answer": "B"
  },
  {
    "id": 307,
    "q": "Which of the following is a key limitation of Proof of Work?",
    "options": {
      "A": "Low security",
      "B": "High energy consumption",
      "C": "No decentralization",
      "D": "No mining rewards"
    },
    "answer": "B"
  },
  {
    "id": 308,
    "q": "Which of the following contributes to network delay in blockchain?",
    "options": {
      "A": "Block size",
      "B": "Block propagation time",
      "C": "Encryption algorithm",
      "D": "Wallet address"
    },
    "answer": "B"
  },
  {
    "id": 309,
    "q": "Which type of blockchain allows restricted access and controlled participation?",
    "options": {
      "A": "Public blockchain",
      "B": "Private blockchain",
      "C": "Hybrid blockchain",
      "D": "Open blockchain"
    },
    "answer": "B"
  },
  {
    "id": 310,
    "q": "What is the main function of transaction inputs in Bitcoin?",
    "options": {
      "A": "Define sender’s balance",
      "B": "Specify source of funds",
      "C": "Store transaction fees",
      "D": "Encrypt data"
    },
    "answer": "B"
  },
  {
    "id": 311,
    "q": "Which consensus mechanism selects validators based on the amount of cryptocurrency they lock as collateral?",
    "options": {
      "A": "Proof of Work",
      "B": "Proof of Stake",
      "C": "Proof of Burn",
      "D": "Proof of Authority"
    },
    "answer": "B"
  },
  {
    "id": 314,
    "q": "What is “gas limit” in Ethereum?",
    "options": {
      "A": "Maximum number of transactions per block",
      "B": "Maximum computational effort allowed for a transaction",
      "C": "Total balance in a wallet",
      "D": "Network speed limit"
    },
    "answer": "B"
  },
  {
    "id": 315,
    "q": "Which language is primarily used to write Ethereum smart contracts?",
    "options": {
      "A": "Java",
      "B": "Python",
      "C": "Solidity",
      "D": "C++"
    },
    "answer": "C"
  },
  {
    "id": 316,
    "q": "What is the function of Go Ethereum (Geth)?",
    "options": {
      "A": "Mining hardware",
      "B": "Ethereum client implementation",
      "C": "Encryption tool",
      "D": "Wallet application"
    },
    "answer": "B"
  },
  {
    "id": 317,
    "q": "Which of the following is a key feature of Proof of Stake compared to Proof of Work?",
    "options": {
      "A": "Requires more electricity",
      "B": "Requires specialized hardware",
      "C": "Energy-efficient validation",
      "D": "Uses hash puzzles"
    },
    "answer": "C"
  },
  {
    "id": 318,
    "q": "Which type of fault involves nodes behaving maliciously or arbitrarily in a distributed system?",
    "options": {
      "A": "Crash fault",
      "B": "Timing fault",
      "C": "Byzantine fault",
      "D": "Logical fault"
    },
    "answer": "C"
  },
  {
    "id": 319,
    "q": "What is the main goal of consensus algorithms like Paxos?  \fA) Encrypt transactions B) Ensure all nodes agree on a single value C) Reduce transaction cost D) Speed up mining Answer: B  Q320. In Ethereum, what does a transaction nonce represent?",
    "options": {
      "A": "Block number",
      "B": "Number of transactions sent by an account",
      "C": "Gas price",
      "D": "Hash value"
    },
    "answer": "B"
  },
  {
    "id": 321,
    "q": "Which of the following best describes state machine replication?",
    "options": {
      "A": "Copying data across servers without synchronization",
      "B": "Maintaining identical state across distributed nodes",
      "C": "Encrypting data across systems",
      "D": "Creating backup files"
    },
    "answer": "B"
  },
  {
    "id": 322,
    "q": "What is the role of validators in Ethereum PoS?",
    "options": {
      "A": "Encrypt transactions",
      "B": "Store private keys",
      "C": "Propose and validate blocks",
      "D": "Manage wallets"
    },
    "answer": "C"
  },
  {
    "id": 323,
    "q": "Which of the following is a disadvantage of Proof of Burn?",
    "options": {
      "A": "High energy consumption",
      "B": "Loss of usable cryptocurrency",
      "C": "Requires mining hardware",
      "D": "Slow transaction speed"
    },
    "answer": "B"
  },
  {
    "id": 324,
    "q": "What ensures that Ethereum smart contracts execute identically on all nodes?",
    "options": {
      "A": "Central server",
      "B": "Deterministic EVM execution",
      "C": "User authentication",
      "D": "Mining rewards"
    },
    "answer": "B"
  },
  {
    "id": 325,
    "q": "Which property of distributed consensus ensures that eventually a decision is reached?",
    "options": {
      "A": "Safety",
      "B": "Liveness",
      "C": "Integrity",
      "D": "Confidentiality"
    },
    "answer": "B"
  },
  {
    "id": 326,
    "q": "Which scalability approach improves performance without modifying the base blockchain layer?  \fA) Layer 2 solutions B) Hard fork C) Mining optimization D) Hashing Answer: A  Q327. Which of the following best describes a Sybil attack in blockchain?",
    "options": {
      "A": "Mining multiple blocks simultaneously",
      "B": "Creating multiple fake identities to control the network",
      "C": "Stealing private keys",
      "D": "Delaying transactions"
    },
    "answer": "B"
  },
  {
    "id": 328,
    "q": "Which of the following best defines a Decentralized Identifier (DID)?",
    "options": {
      "A": "A username stored in a database",
      "B": "A globally unique identifier controlled by a central authority",
      "C": "A self-owned identifier without reliance on a central authority",
      "D": "A password-based identity"
    },
    "answer": "C"
  },
  {
    "id": 331,
    "q": "What is the primary goal of decentralized identity systems?",
    "options": {
      "A": "Increase dependency on third parties",
      "B": "Give users control over their identity",
      "C": "Centralize authentication",
      "D": "Reduce encryption"
    },
    "answer": "B"
  },
  {
    "id": 332,
    "q": "Which blockchain application is most suitable for voting systems?",
    "options": {
      "A": "Data encryption",
      "B": "Transparent and tamper-proof record keeping",
      "C": "High transaction speed",
      "D": "Centralized storage"
    },
    "answer": "B"
  },
  {
    "id": 333,
    "q": "Which of the following best describes Practical Byzantine Fault Tolerance (PBFT)?",
    "options": {
      "A": "A probabilistic consensus method",
      "B": "A deterministic consensus protocol tolerating malicious nodes",
      "C": "A mining-based consensus",
      "D": "A centralized agreement system"
    },
    "answer": "B"
  },
  {
    "id": 334,
    "q": "Which of the following is a key challenge in blockchain scalability?",
    "options": {
      "A": "Increasing transaction fees",
      "B": "Limited transaction processing speed",
      "C": "Centralization",
      "D": "Encryption overhead"
    },
    "answer": "B"
  },
  {
    "id": 335,
    "q": "What is the role of a verifier in a Verifiable Credential system?",
    "options": {
      "A": "Issue credentials",
      "B": "Store credentials",
      "C": "Validate credentials presented by a holder",
      "D": "Mine blocks"
    },
    "answer": "C"
  },
  {
    "id": 338,
    "q": "What is the main purpose of writing chaincode in Hyperledger Fabric?",
    "options": {
      "A": "Mining blocks",
      "B": "Defining business logic for transactions",
      "C": "Encrypting data",
      "D": "Managing network nodes"
    },
    "answer": "B"
  },
  {
    "id": 339,
    "q": "Which of the following is TRUE about Byzantine Agreement protocols?",
    "options": {
      "A": "All nodes must be honest",
      "B": "They work only in centralized systems",
      "C": "They tolerate faulty or malicious nodes",
      "D": "They eliminate communication"
    },
    "answer": "C"
  },
  {
    "id": 340,
    "q": "What is the purpose of sharding in blockchain scalability?",
    "options": {
      "A": "Encrypt data",
      "B": "Split network into smaller partitions",
      "C": "Increase block size",
      "D": "Reduce node count"
    },
    "answer": "B"
  },
  {
    "id": 341,
    "q": "Which of the following is a key challenge in blockchain interoperability?",
    "options": {
      "A": "Data storage",
      "B": "Communication between different blockchain networks",
      "C": "Mining difficulty",
      "D": "Wallet management"
    },
    "answer": "B"
  },
  {
    "id": 342,
    "q": "What is the role of the ordering service in Hyperledger Fabric?",
    "options": {
      "A": "Validate transactions",
      "B": "Execute smart contracts",
      "C": "Order transactions into blocks",
      "D": "Store private keys"
    },
    "answer": "C"
  },
  {
    "id": 343,
    "q": "What is the primary function of a timelock in blockchain transactions?  \fA) Encrypt data B) Restrict transaction execution to a specific time C) Store identity D) Increase transaction speed Answer: B  Q344. Which of the following is a common vulnerability in smart contracts?",
    "options": {
      "A": "High energy consumption",
      "B": "Coding errors or bugs",
      "C": "Lack of encryption",
      "D": "Slow execution"
    },
    "answer": "B"
  },
  {
    "id": 345,
    "q": "Which of the following best describes interoperability in blockchain?",
    "options": {
      "A": "Storing data in one chain",
      "B": "Interaction between multiple blockchain systems",
      "C": "Increasing block size",
      "D": "Encrypting transactions"
    },
    "answer": "B"
  },
  {
    "id": 346,
    "q": "What is a key feature of Bitcoin-NG compared to traditional Bitcoin?",
    "options": {
      "A": "No mining required",
      "B": "Separation of leader election and transaction serialization",
      "C": "Fully centralized control",
      "D": "Uses Proof of Stake"
    },
    "answer": "B"
  },
  {
    "id": 347,
    "q": "Which phase in PBFT ensures that all nodes agree on the same request before execution?",
    "options": {
      "A": "Commit phase",
      "B": "Pre-prepare phase",
      "C": "Prepare phase",
      "D": "Verification phase"
    },
    "answer": "C"
  },
  {
    "id": 348,
    "q": "What ensures that a Verifiable Credential has not been tampered with?",
    "options": {
      "A": "Timestamp",
      "B": "Digital signature",
      "C": "Password",
      "D": "Hashchain"
    },
    "answer": "B"
  },
  {
    "id": 349,
    "q": "Which mechanism ensures that a transaction either completes fully or fails entirely in cross-chain exchange?",
    "options": {
      "A": "Hashing",
      "B": "Atomic swap",
      "C": "Mining",
      "D": "Encryption"
    },
    "answer": "B"
  },
  {
    "id": 350,
    "q": "Which type of attack attempts to manipulate transaction ordering for profit?",
    "options": {
      "A": "Eclipse attack",
      "B": "Replay attack",
      "C": "Front-running variant attack",
      "D": "Sybil attack"
    },
    "answer": "C"
  },
  {
    "id": 351,
    "q": "Which of the following is a feature of decentralized identity compared to centralized identity?",
    "options": {
      "A": "Requires central database",
      "B": "User has no control",
      "C": "Identity is portable and user-controlled",
      "D": "Depends on a single server"
    },
    "answer": "C"
  },
  {
    "id": 352,
    "q": "What is a major limitation of blockchain in real-world applications?",
    "options": {
      "A": "Lack of decentralization",
      "B": "Scalability issues",
      "C": "No security",
      "D": "No transparency"
    },
    "answer": "B"
  },
  {
    "id": 355,
    "q": "What is the main purpose of network security mechanisms in blockchain?",
    "options": {
      "A": "Increase transaction fees",
      "B": "Prevent unauthorized access and attacks",
      "C": "Speed up mining",
      "D": "Reduce storage"
    },
    "answer": "B"
  },
  {
    "id": 356,
    "q": "Which property of distributed consensus ensures that eventually a decision is reached?",
    "options": {
      "A": "Safety",
      "B": "Liveness",
      "C": "Integrity",
      "D": "Confidentiality"
    },
    "answer": "B"
  },
  {
    "id": 357,
    "q": "Which of the following is TRUE about Hyperledger Indy?",
    "options": {
      "A": "It is used for cryptocurrency mining",
      "B": "It focuses on decentralized identity solutions",
      "C": "It is a public blockchain",
      "D": "It replaces Ethereum"
    },
    "answer": "B"
  },
  {
    "id": 358,
    "q": "Which of the following best describes a replay attack?",
    "options": {
      "A": "Modifying transaction data",
      "B": "Reusing a valid transaction in another context",
      "C": "Blocking network nodes",
      "D": "Creating fake blocks"
    },
    "answer": "B"
  },
  {
    "id": 359,
    "q": "What is the main purpose of Hyperledger Fabric Test Network?",
    "options": {
      "A": "Mining cryptocurrencies",
      "B": "Testing and deploying applications in a controlled environment",
      "C": "Encrypting transactions",
      "D": "Managing wallets"
    },
    "answer": "B"
  },
  {
    "id": 360,
    "q": "Which of the following is an example of blockchain use in logistics?  \fA) Password management B) Tracking goods across supply chain C) Email communication D) Social networking Answer: B  Q361. What is the role of validators in Ethereum PoS?",
    "options": {
      "A": "Encrypt transactions",
      "B": "Store private keys",
      "C": "Propose and validate blocks",
      "D": "Manage wallets"
    },
    "answer": "C"
  },
  {
    "id": 362,
    "q": "Which of the following is a potential risk in decentralized applications (DApps)?",
    "options": {
      "A": "Central control",
      "B": "Smart contract vulnerabilities",
      "C": "Lack of users",
      "D": "No data storage"
    },
    "answer": "B"
  },
  {
    "id": 365,
    "q": "Which of the following industries benefits from blockchain for fraud detection?",
    "options": {
      "A": "Agriculture",
      "B": "Finance",
      "C": "Transportation",
      "D": "Gaming"
    },
    "answer": "B"
  },
  {
    "id": 366,
    "q": "What is the main goal of consensus algorithms like Paxos?",
    "options": {
      "A": "Encrypt transactions",
      "B": "Ensure all nodes agree on a single value",
      "C": "Reduce transaction cost",
      "D": "Speed up mining"
    },
    "answer": "B"
  },
  {
    "id": 367,
    "q": "Which of the following is a disadvantage of relying on a trusted third party in asset transfer?",
    "options": {
      "A": "Faster transactions",
      "B": "Reduced cost",
      "C": "Single point of failure",
      "D": "Increased decentralization"
    },
    "answer": "C"
  },
  {
    "id": 368,
    "q": "Which of the following is a disadvantage of Proof of Burn?",
    "options": {
      "A": "High energy consumption",
      "B": "Loss of usable cryptocurrency",
      "C": "Requires mining hardware",
      "D": "Slow transaction speed"
    },
    "answer": "B"
  },
  {
    "id": 369,
    "q": "Which of the following blockchain use cases is related to intellectual property protection?",
    "options": {
      "A": "Voting system",
      "B": "Supply chain tracking",
      "C": "Digital rights management",
      "D": "Banking"
    },
    "answer": "C"
  }
];
