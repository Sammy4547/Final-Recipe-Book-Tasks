import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-gray-100 dark:bg-gray-300 shadow-sm sticky top-0 z-50">
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>

            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 ">Recipe Books</h1>
            <nav className=" md:flex gap-8 items-center text-sm font-medium text-blue-400">
                <Link className='font-bold  hover:text-blue-600' to="/recipes">Recipes</Link>
                <Link className='font-bold  hover:text-blue-600' to="/addrecipes">Add new Recipes</Link>

            </nav>
        </div>
    </header>
  )
}
