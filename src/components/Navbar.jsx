import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-neutral-700 border-b-2 border-amber-300 dark:bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-white dark:text-black ">
          Recipe Books
        </h1>
        <nav className=" md:flex gap-8 items-center text-sm font-medium text-blue-400">
          <Link className="font-bold  hover:text-blue-600" to="/">
            Register
          </Link>
          <Link className="font-bold  hover:text-blue-600" to="/recipes">
            Recipes
          </Link>
          
          <ThemeToggle/>
        </nav>
      </div>
    </header>
  );
}
