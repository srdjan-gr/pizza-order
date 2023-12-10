'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react';

import { redirect } from 'next/navigation';
import Loading from '@/components/utility/Loading';
import DashboardMenu from '@/components/dashboard/DashboardMenu';

const page = () => {

  const [ isAdminProfile, setIsAdminProfile ] = useState(false)
  const [ isLoadingProfile, setIsLoadingProfile ] = useState(false)

  const session = useSession()
  const sessionStatus = session.status

  
  useEffect(() => {
    setIsLoadingProfile(true)
        
    // Na ucitavanju uzimamo podatke o korisniku iz api/userprofile GET
    if(sessionStatus === 'authenticated'){
      fetch('./api/userProfile')
        .then(response => {response.json()
          .then(data => {
              setIsAdminProfile(data.admin)
              setIsLoadingProfile(false)
          })
      })
    }
  }, [sessionStatus, session])


  // Spiner for page loading
  if(session.status === 'loading' || isLoadingProfile){
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
      <DashboardMenu  />
    
    </section>
  )
}

export default page
