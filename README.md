# 🧾 Recipe Books Project

A modern **Recipe Book Web App** where users can add, view, and manage recipes using a multi-step form. Built using **React 19**, styled with **Tailwind CSS**, powered by **Redux Toolkit** for state management, and fully validated using **Formik + Yup**. It supports persistent storage via **localStorage**, and is tested using **Vitest**.

---

## 🚀 Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| **React 19**      | Core library for UI development |
| **Tailwind CSS**  | Utility-first styling framework |
| **Formik**        | Form handling in React          |
| **Yup**           | Form validation schema builder  |
| **React Router**  | Client-side routing             |
| **nanoid**        | Generate unique IDs             |
| **Redux Toolkit** | State management                |
| **Vitest**        | Testing framework               |

---

## 📦 Features

- 🧾 Multi-step recipe form
- 👤 User details integration
- 🍱 Cuisine, diet & meal preferences
- 💾 Persistent state via `localStorage`
- 🔄 Redux-powered global state
- 🧪 Unit tests using Vitest
- 🧭 Navigation with React Router
- 💅 Clean responsive UI with Tailwind

---

## 📁 Project Structure

```bash
recipe-books/
│
├── components/          # Reusable UI components (Button, TextField, etc.)
├── pages/               # Route pages (AddRecipes, Recipes, etc.)
├── redux/               # Redux  & store setup
├── features/            # Recipe Slices in which stored the state of 
├── hooks/               # Custom hooks
|── context/ThemeContext # Context of handling dark and light Mode          
├── validation/          # Yup schemas for form validation
├── lib/                 # Utility functions (e.g. localStorage,fetching )
├── routes               # Define all routes in the routes folder           
├── tests/               # Vitest test files 
├── App.jsx              # Main app layout
├── main.jsx             # React entry point
└── tailwind.config.js   # Tailwind CSS config
