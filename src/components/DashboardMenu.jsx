import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react';

import { HiOutlineCog6Tooth, HiOutlineUsers, HiOutlineDocumentText, HiOutlineSquares2X2 } from "react-icons/hi2"

const dashboardMenu = ({isAdminProfile, setIsAdminProfile}) => {
  return (

    <nav className='flex flex-col items-start w-1/6 border-r border-gray-300 '>

      <div className='flex flex-col items-start py-5 px-2 w-full'>
        <Link 
          href={'/menu'} 
          className='w-full text-lg text-pizza_wood-400 mb-2 hover:text-pizza_wood-600 flex items-center justify-between hover:bg-pizza_wood-50 hover:rounded-md px-5 py-1'
        >
          Categories
          <HiOutlineSquares2X2  className='ml-3 h-6 w-6'/>
        </Link>
        <Link 
          href={'/menu'} 
          className='w-full text-lg text-pizza_wood-400 mb-2 hover:text-pizza_wood-600 flex items-center justify-between hover:bg-pizza_wood-50 hover:rounded-md px-5 py-1'
        >
          Pizza Menu
          <HiOutlineDocumentText className='ml-3 h-6 w-6'/>
        </Link>
        <Link 
          href={'/menu'} 
          className='w-full text-lg text-pizza_wood-400 mb-2 hover:text-pizza_wood-600 flex items-center justify-between hover:bg-pizza_wood-50 hover:rounded-md px-5 py-1'
        >
          Users
          <HiOutlineUsers className='ml-3 h-6 w-6'/>
        </Link>
        <Link 
          href={'/menu'} 
          className='w-full text-lg text-pizza_wood-400 mb-2 hover:text-pizza_wood-600 flex items-center justify-between hover:bg-pizza_wood-50 hover:rounded-md px-5 py-1'
        >
          User Profile
         <HiOutlineCog6Tooth className='ml-3 h-6 w-6'/> 
        </Link>
      </div>

    </nav>

  )
}

export default dashboardMenu
