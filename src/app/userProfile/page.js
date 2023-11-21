'use client'

import Loading from "@/components/Loading"
import ProfileForm from "@/components/ProfileForm"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"


const page = () => {

    const session = useSession()
    const status = session.status

    if(status === 'loading'){
        return <Loading />
    }

    if(status === 'unauthenticated'){
        return redirect('/login')
    }


    return (
        <>
          {/* Header imported from man Layout */}
    
          <main className='m-auto '>
            <ProfileForm />
          </main>
    
          {/* Footer imported from man Layout */}
        </>
    )
}

export default page
