import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {

    const {theme,toggletheme} = useContext(ThemeContext)
  return (
    <button className='p-2 rounded-md border text-sm text-black bg-gray-400' onClick={toggletheme}>
    {theme === 'dark' ? '☀  Mode' : '🌙  Mode'}

    </button>
  )
}
