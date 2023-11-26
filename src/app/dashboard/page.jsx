'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react';

import { HiOutlineCog6Tooth, HiOutlineUsers, HiOutlineDocumentText, HiOutlineSquares2X2 } from "react-icons/hi2"
import { redirect } from 'next/navigation';
import Loading from '@/components/Loading';

const page = () => {

  const [ isAdminProfile, setIsAdminProfile ] = useState(false)

  const session = useSession()

  
  useEffect(() => {
        
    // Na ucitavanju uzimamo podatke o korisniku iz api/userprofile GET
    fetch('./api/userProfile').then(response => {
        response.json()
        .then(data => {
            setIsAdminProfile(data.admin)
        })
    })
  }, [])


  if(session.status === 'loading'){
    return <Loading />
  }


  if(!isAdminProfile ){

    return(
      <section className='max-w-7xl h-screen w-full text-center m-auto pt-32 text-xl'>
        <p className='mb-2 text-gray-500'>Not an admin!</p>

        <Link href={'/login'} className='underline text-pizza_red-500'>Back to Login page </Link>
      </section>
      )  
  }



  return (
    <section className='max-w-7xl h-screen m-auto pt-20'>
      
      <h1 className='text-xl text-gray-400 w-full max-w-xs underline mt-5 mb-10'>Admin dashboard</h1>
      
      {/* left Navigation */}
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
    </section>
  )
}

export default page
