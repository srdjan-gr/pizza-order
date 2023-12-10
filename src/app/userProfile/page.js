'use client'

import Loading from "@/components/utility/Loading"
import ProfileForm from "@/components/ProfileForm"
import DashboardMenu from '@/components/dashboard/DashboardMenu';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react";


const page = () => {

    const session = useSession()
    const status = session.status


    if(status === 'unauthenticated'){
        return redirect('/login')
    }


    // Spiner for page loading
    if(session.status === 'loading'){
      return <Loading />
    }



    return (
      <section className='max-w-7xl h-screen m-auto pt-20'>
                     
        <h1 className='text-xl text-gray-400 w-full max-w-xs underline mt-5 mb-10'>User profile</h1>

        <div className="flex ">
            {/* left Navigation */}
            <DashboardMenu  />

            {/* <UserProfileForm /> */}
            <ProfileForm />
        </div>
      </section>
    )
}

export default page
