import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "./models/Quiz.js";

dotenv.config();

const quizzes = [
  // ===================== COMPUTER NETWORKS =====================
  {
    subject: "Computer Networks",
    questions: [
      {
        question: "What does TCP stand for?",
        options: [
          "Transfer Control Protocol",
          "Transmission Control Protocol",
          "Transport Communication Protocol",
          "Terminal Control Protocol"
        ],
        correctAnswer: "Transmission Control Protocol",
        explanation: "TCP stands for Transmission Control Protocol and provides reliable, ordered communication."
      },
      {
        question: "Which device operates at the Network Layer?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        correctAnswer: "Router",
        explanation: "Routers operate at Layer 3 (Network Layer) and route packets using IP addresses."
      },
      {
        question: "What is the default port number of HTTP?",
        options: ["20", "21", "80", "443"],
        correctAnswer: "80",
        explanation: "HTTP uses port 80 by default for web communication."
      },
      {
        question: "Which protocol is used to send emails?",
        options: ["FTP", "SMTP", "POP3", "IMAP"],
        correctAnswer: "SMTP",
        explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails."
      },
      {
        question: "Which address is used to uniquely identify a device on a network?",
        options: ["MAC Address", "IP Address", "Port Number", "Subnet Mask"],
        correctAnswer: "MAC Address",
        explanation: "MAC address uniquely identifies a device at the data link layer."
      },
      {
        question: "Which layer of OSI model handles encryption?",
        options: ["Session", "Presentation", "Transport", "Application"],
        correctAnswer: "Presentation",
        explanation: "Presentation layer handles encryption, compression, and translation."
      },
      {
        question: "Which protocol resolves IP to MAC address?",
        options: ["RARP", "DNS", "ARP", "ICMP"],
        correctAnswer: "ARP",
        explanation: "ARP resolves IP addresses to MAC addresses."
      },
      {
        question: "Which topology uses a central device?",
        options: ["Bus", "Ring", "Star", "Mesh"],
        correctAnswer: "Star",
        explanation: "Star topology uses a central hub or switch."
      },
      {
        question: "Which protocol is connectionless?",
        options: ["TCP", "FTP", "UDP", "SMTP"],
        correctAnswer: "UDP",
        explanation: "UDP is connectionless and faster but unreliable."
      },
      {
        question: "What does DNS do?",
        options: [
          "Translates domain names to IP addresses",
          "Encrypts data",
          "Transfers files",
          "Assigns MAC addresses"
        ],
        correctAnswer: "Translates domain names to IP addresses",
        explanation: "DNS resolves human-readable domain names into IP addresses."
      }
    ]
  },

  // ===================== OPERATING SYSTEM =====================
  {
    subject: "Operating Systems",
    questions: [
      {
        question: "What is the main function of an operating system?",
        options: [
          "Run applications",
          "Manage hardware and software",
          "Compile programs",
          "Provide internet access"
        ],
        correctAnswer: "Manage hardware and software",
        explanation: "OS manages system resources and provides an interface for users."
      },
      {
        question: "Which scheduling algorithm may cause starvation?",
        options: ["FCFS", "Round Robin", "Priority Scheduling", "FIFO"],
        correctAnswer: "Priority Scheduling",
        explanation: "Low-priority processes may never execute."
      },
      {
        question: "What is a deadlock?",
        options: [
          "CPU overload",
          "Infinite loop",
          "Processes waiting for each other",
          "Memory leak"
        ],
        correctAnswer: "Processes waiting for each other",
        explanation: "Deadlock occurs when processes hold resources and wait indefinitely."
      },
      {
        question: "Which memory is volatile?",
        options: ["ROM", "RAM", "SSD", "HDD"],
        correctAnswer: "RAM",
        explanation: "RAM loses data when power is turned off."
      },
      {
        question: "What is a process?",
        options: [
          "A program in execution",
          "A program file",
          "An instruction",
          "A compiler"
        ],
        correctAnswer: "A program in execution",
        explanation: "A process is an active instance of a program."
      },
      {
        question: "Which OS is open source?",
        options: ["Windows", "Linux", "macOS", "DOS"],
        correctAnswer: "Linux",
        explanation: "Linux is open source and community-driven."
      },
      {
        question: "Which system call creates a new process?",
        options: ["exec()", "wait()", "fork()", "exit()"],
        correctAnswer: "fork()",
        explanation: "fork() creates a new process in Unix-based systems."
      },
      {
        question: "What is context switching?",
        options: [
          "Switching users",
          "Switching processes",
          "Switching memory",
          "Switching devices"
        ],
        correctAnswer: "Switching processes",
        explanation: "Context switching switches CPU from one process to another."
      },
      {
        question: "Which memory allocation suffers from fragmentation?",
        options: ["Paging", "Segmentation", "Virtual memory", "Cache"],
        correctAnswer: "Segmentation",
        explanation: "Segmentation can cause external fragmentation."
      },
      {
        question: "Which component manages files?",
        options: ["Kernel", "Shell", "File system", "Scheduler"],
        correctAnswer: "File system",
        explanation: "File system organizes and manages files on storage."
      }
    ]
  },

  // ===================== DBMS =====================
  {
    subject: "DBMS",
    questions: [
      {
        question: "What does DBMS stand for?",
        options: [
          "Data Backup Management System",
          "Database Management System",
          "Data Base Machine Software",
          "Database Modeling System"
        ],
        correctAnswer: "Database Management System",
        explanation: "DBMS is software to manage databases efficiently."
      },
      {
        question: "Which key uniquely identifies a record?",
        options: ["Foreign Key", "Candidate Key", "Primary Key", "Composite Key"],
        correctAnswer: "Primary Key",
        explanation: "Primary key uniquely identifies records in a table."
      },
      {
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: "2NF",
        explanation: "2NF removes partial dependency."
      },
      {
        question: "What is a foreign key?",
        options: [
          "Primary key of same table",
          "Primary key of another table",
          "Candidate key",
          "Composite key"
        ],
        correctAnswer: "Primary key of another table",
        explanation: "Foreign key references the primary key of another table."
      },
      {
        question: "Which SQL command is used to remove a table?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
        correctAnswer: "DROP",
        explanation: "DROP removes the table structure completely."
      },
      {
        question: "Which command removes all rows but keeps structure?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        correctAnswer: "TRUNCATE",
        explanation: "TRUNCATE deletes all rows but keeps table structure."
      },
      {
        question: "Which language is used to query databases?",
        options: ["HTML", "SQL", "XML", "CSS"],
        correctAnswer: "SQL",
        explanation: "SQL is used for querying and managing databases."
      },
      {
        question: "Which join returns common records?",
        options: ["Left Join", "Right Join", "Full Join", "Inner Join"],
        correctAnswer: "Inner Join",
        explanation: "Inner join returns only matching records."
      },
      {
        question: "What is normalization?",
        options: [
          "Reducing redundancy",
          "Increasing data",
          "Encrypting data",
          "Backing up data"
        ],
        correctAnswer: "Reducing redundancy",
        explanation: "Normalization minimizes redundancy and improves integrity."
      },
      {
        question: "Which constraint ensures no duplicate values?",
        options: ["NOT NULL", "CHECK", "UNIQUE", "DEFAULT"],
        correctAnswer: "UNIQUE",
        explanation: "UNIQUE constraint prevents duplicate values."
      }
    ]
  },

  // ===================== DATA STRUCTURES =====================
  {
    subject: "Data Structures",
    questions: [
      {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack",
        explanation: "Stack follows Last In First Out principle."
      },
      {
        question: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: "Queue",
        explanation: "Queue follows First In First Out."
      },
      {
        question: "Which is a linear data structure?",
        options: ["Tree", "Graph", "Queue", "Heap"],
        correctAnswer: "Queue",
        explanation: "Queue stores elements linearly."
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)",
        explanation: "Binary search divides the array into halves."
      },
      {
        question: "Which structure uses nodes with pointers?",
        options: ["Array", "Stack", "Linked List", "Queue"],
        correctAnswer: "Linked List",
        explanation: "Linked list uses nodes connected by pointers."
      },
      {
        question: "Which traversal uses Root-Left-Right?",
        options: ["Inorder", "Preorder", "Postorder", "Level Order"],
        correctAnswer: "Preorder",
        explanation: "Preorder traversal visits root first."
      },
      {
        question: "Which structure is non-linear?",
        options: ["Array", "Queue", "Tree", "Stack"],
        correctAnswer: "Tree",
        explanation: "Tree is a non-linear data structure."
      },
      {
        question: "Which operation is costly in array?",
        options: ["Access", "Insertion", "Traversal", "Search"],
        correctAnswer: "Insertion",
        explanation: "Insertion requires shifting elements."
      },
      {
        question: "Which uses priority?",
        options: ["Stack", "Queue", "Priority Queue", "Deque"],
        correctAnswer: "Priority Queue",
        explanation: "Priority queue serves based on priority."
      },
      {
        question: "Which algorithm sorts by swapping?",
        options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
        correctAnswer: "Bubble Sort",
        explanation: "Bubble sort swaps adjacent elements."
      }
    ]
  },

  // ===================== JAVASCRIPT =====================
  {
    subject: "JavaScript",
    questions: [
      {
        question: "Which keyword declares a variable?",
        options: ["int", "var", "string", "float"],
        correctAnswer: "var",
        explanation: "var declares variables in JavaScript."
      },
      {
        question: "Which keyword is block scoped?",
        options: ["var", "let", "function", "global"],
        correctAnswer: "let",
        explanation: "let is block scoped."
      },
      {
        question: "Which is a JavaScript framework?",
        options: ["Django", "Laravel", "React", "Flask"],
        correctAnswer: "React",
        explanation: "React is a JavaScript library/framework."
      },
      {
        question: "What does === check?",
        options: ["Value only", "Type only", "Value and type", "Reference"],
        correctAnswer: "Value and type",
        explanation: "=== checks both value and type."
      },
      {
        question: "Which method converts JSON to object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
        correctAnswer: "JSON.parse()",
        explanation: "JSON.parse converts JSON string to object."
      },
      {
        question: "Which is not a JS data type?",
        options: ["Number", "String", "Boolean", "Character"],
        correctAnswer: "Character",
        explanation: "JavaScript has no character type."
      },
      {
        question: "Which function runs on page load?",
        options: ["onClick", "onLoad", "onSubmit", "onHover"],
        correctAnswer: "onLoad",
        explanation: "onLoad runs when page loads."
      },
      {
        question: "Which operator is used for concatenation?",
        options: ["+", "-", "*", "/"],
        correctAnswer: "+",
        explanation: "+ concatenates strings."
      },
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "foreach"],
        correctAnswer: "do-while",
        explanation: "do-while runs at least once."
      },
      {
        question: "Which keyword stops loop execution?",
        options: ["stop", "exit", "break", "continue"],
        correctAnswer: "break",
        explanation: "break exits the loop."
      }
    ]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Quiz.deleteMany();
    await Quiz.insertMany(quizzes);
    console.log("✅ Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
