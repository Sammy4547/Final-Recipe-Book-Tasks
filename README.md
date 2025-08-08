# 🧾 Recipe Books

A modern **Recipe Book Web App** where users can add, view, and manage recipes through a **multi-step form**.  
Built with **React 19**, styled using **Tailwind CSS**, powered by **Redux Toolkit** for state management, and fully validated using **Formik + Yup**.  
Supports **persistent storage** via `localStorage` and includes **unit tests** with **Vitest**.

---

## 📸 Demo
![Recipe Books Demo](<Recording 2025-08-08 160724.gif>)

---

## 🖼 Project Prototype

![Prototype Screenshot 1](<Screenshot 2025-08-08 162237.png>)
![Prototype Screenshot 2](<Screenshot 2025-08-08 162251.png>)
![Prototype Screenshot 3](<Screenshot 2025-08-08 162307.png>)
![Prototype Screenshot 4](<Screenshot 2025-08-08 162334.png>)

---

## 📖 Overview

**Recipe Books** is an interactive web application that allows users to:
- ➕ Add new recipes via a multi-step form.
- 📜 View and manage their recipes.
- 🌓 Toggle between dark and light mode.
- 💾 Store recipes persistently even after page reload.
- 📱 Enjoy a clean and responsive UI.

---

## 📂 Features & Implementation

### 🛠 Reusable Components
- Built **TextField** & **Button** components for consistency and reusability.

### 🎨 Styling
- **Tailwind CSS** for modern, responsive, and utility-first styling.

### 🔄 State & Data Handling
- **Redux Toolkit** to manage and persist global state.
- **Formik** for efficient form handling.
- **Yup** for form validation rules.
- **useFetch** custom hook to fetch data.
- **useLocalStorage** custom hook to store data persistently in the browser.

### 🗺 Navigation
- **React Router v6.6** for seamless client-side routing.

### 🌗 Theming
- **Context API** for Dark/Light mode toggle.

### 🧪 Testing
- **Vitest** for unit testing and maintaining code reliability.

---

## 🚀 Tech Stack

| Technology         | Purpose                                         |
|--------------------|-------------------------------------------------|
| **React 19**       | Core library for building UI                    |
| **Tailwind CSS**   | Utility-first CSS framework                     |
| **Formik**         | Form state management                           |
| **Yup**            | Validation schema for form inputs               |
| **React Router**   | Client-side navigation                          |
| **nanoid**         | Unique ID generation for recipes                |
| **Redux Toolkit**  | Global state management                         |
| **Vitest**         | Unit testing framework                          |

---

## ✨ Key Features

- 🧾 **Multi-step recipe form** for structured data input  
- 👤 **User details integration**  
- 🍱 **Cuisine, diet & meal preferences**  
- 💾 **Persistent state** via `localStorage`  
- 🔄 **Redux-powered global state**  
- 🧪 **Unit tests** using Vitest  
- 🧭 **Routing** with React Router  
- 💅 **Responsive design** with Tailwind CSS  
- 🌗 **Dark/Light mode** using Context API  
- ♻ **Reusable UI components** (Button, TextField, etc.)  
- 🪝 **Custom hooks** for localStorage & API fetching  

---

## 📁 Project Structure

```bash
recipe-books/
│
├── components/          # Reusable UI components (Button, TextField, etc.)
├── pages/               # Page components (AddRecipes, Recipes, etc.)
├── redux/               # Redux store setup
├── features/            # Recipe slice for storing state
├── hooks/               # Custom hooks (useLocalStorage, useFetch)
├── context/             # ThemeContext for Dark/Light mode
├── validation/          # Yup validation schemas
├── lib/                 # Utility functions & helpers
├── routes/              # Centralized route definitions
├── tests/               # Unit tests with Vitest
├── App.jsx              # Main App component
├── main.jsx             # React entry point
└── tailwind.config.js   # Tailwind CSS configuration
