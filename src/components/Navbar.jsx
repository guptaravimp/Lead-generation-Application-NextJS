"use client"
import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import { useSelector } from 'react-redux'
import Link from 'next/link'
function Navbar() {
  const isdarkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div className={` ${isdarkMode ? ' bg-gradient-to-br from-gray-900 to-gray-800 via-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'} w-full mx-auto flex justify-between items-center p-1 `}>
      <div className="w-full flex justify-between items-center p-4">
        <div className='flex gap-2'>
          <Link href={"/"}> <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>

          </div>
          </Link>
         
          <h1 className="text-2xl font-bold text-blue-600">LeadGen Pro</h1>
        </div>


        <DarkModeToggle />
      </div>

    </div>
  )
}

export default Navbar
