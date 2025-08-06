import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function AppLayouts() {
  return (
    <div className='bg-gray-900 dark:bg-gray-100'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
