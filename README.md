## 📚 Repository Overview

This repo contains all my hands-on assignments from my coursework. Each folder represents a different week or module, with complete source code, documentation, and assignment files.

| Module | Week | Topics | Language |
| --- | --- | --- | --- |
| **DSA** | Week 2 | Search Algorithms, Recursion, Financial Forecasting | Java |
| **Design Patterns** | Week 1 | Factory Method, Singleton Pattern | Java |
| **PL/SQL** | Week 1 | Database Queries, Stored Procedures | SQL |
| **React** | Week 1-2 | Components, Props, State Management | JavaScript/React |

---

## 📁 Project Structure

```
Coding-Assessments/
│
├── DSA_WEEK_2/
│   ├── StoreSearch.java          # Linear & Binary Search Implementation
│   ├── FinanceForecaster.java    # Recursive & Optimized Algorithms
│   └── DSA_Assignment.pdf        # Assignment Details & Analysis
│
├── Design_Patterns_Principles_WEEK_1/
│   ├── FactoryMethodPatternExample/
│   │   └── src/
│   │       ├── Document.java
│   │       ├── DocumentFactory.java
│   │       ├── WordDocument.java, PdfDocument.java, ExcelDocument.java
│   │       └── FactoryMethodTest.java
│   │
│   ├── SingletonPatternExample/
│   │   └── src/
│   │       ├── Logger.java
│   │       └── SingletonTest.java
│   │
│   └── JavaDesignPatterns_HOL_Asgn.docx
│
├── PL_SQL_WEEK_1/
│   └── PLSQL_Assignment.docx
│
├── React_WEEK_1&2/
│   ├── myfirstreact_source_A1/           # First React App
│   ├── StudentApp_SourceCode_A2/         # Student Management Portal
│   ├── scorecalculatorapp_source_A3/     # Score Calculator App
│   └── Assignment Documentation (*.docx)
│
└── DN - Java FSE Mandatory hands-on detail.xlsx
```

---

## 🎯 Key Assignments

### **DSA Week 2: Search & Recursion**

**StoreSearch.java** - E-commerce Product Search

- Implements **Linear Search** (O(n)) and **Binary Search** (O(log n))

- Compares performance across different dataset sizes

- Demonstrates the importance of algorithm selection for scalability

**FinanceForecaster.java** - Financial Forecasting

- **Naive Recursive** approach: O(2^n) - Inefficient for large inputs

- **Optimized Recursive** approach: O(log n) - Using fast exponentiation

- Shows how optimization techniques dramatically improve performance

---

### **Design Patterns Week 1**

**Factory Method Pattern**

- Creates different document types (Word, PDF, Excel) without exposing creation logic

- Demonstrates loose coupling and the Open/Closed Principle

- Files: `DocumentFactory`, `WordDocumentFactory`, `PdfDocumentFactory`, `ExcelDocumentFactory`

**Singleton Pattern**

- Implements a thread-safe Logger class with single instance

- Ensures controlled access to shared resources

- Files: `Logger.java`, `SingletonTest.java`

---

### **React Week 1-2: Web Applications**

**Assignment 1: My First React App** (`myfirstreact_source_A1/`)

- Basic React setup and component structure

- Introduction to JSX and component rendering

**Assignment 2: Student Management Portal** (`StudentApp_SourceCode_A2/`)

- Multi-component React application

- Separate sections: Home, About, Contact

- Component composition and styling

**Assignment 3: Score Calculator** (`scorecalculatorapp_source_A3/`)

- Functional components with props

- Score calculation logic

- Custom styling with CSS modules

---


## 💡 Key Learnings

### Data Structures & Algorithms

- **Time Complexity Analysis**: Understanding Big O notation and its practical implications

- **Search Algorithms**: Linear vs Binary search trade-offs

- **Recursion**: Base cases, recursive cases, and optimization techniques

- **Performance Optimization**: Reducing exponential complexity to linear/logarithmic

### Design Patterns

- **Factory Method**: Creating objects without specifying exact classes

- **Singleton**: Ensuring single instance and thread safety

- **SOLID Principles**: Writing maintainable and scalable code

### React.js

- **Component Architecture**: Breaking UI into reusable components

- **Props & State**: Managing data flow in React applications

- **Functional Components**: Modern React development practices

- **Styling**: CSS modules and inline styling approaches

### PL/SQL

- Database query optimization

- Stored procedures and functions

- Transaction management

---

## 📊 Technology Stack

| Technology | Usage |
| --- | --- |
| **Java** | DSA, Design Patterns |
| **React.js** | Frontend Web Applications |
| **JavaScript** | React Components & Logic |
| **CSS** | Styling & Layout |
| **PL/SQL** | Database Programming |

---
