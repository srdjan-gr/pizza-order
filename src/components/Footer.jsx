'use client'

import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Footer = () => {

  const session = useSession()
  const path = usePathname()


  if(session.status === 'loading'){
    return null
  }else{
    return (
      <section className={`${path === '/login' || path === '/registration' ? 'md:absolute md:bottom-0 md:left-0 md:z-40' : '' }  w-full text-gray-800 flex justify-center items-center flex-col p-4 custom_shadow-top`}>
  
          <h1 className="text-xl font-ibm">perfect <span className="text-orange-500">pizza</span></h1>
  
          <div className="flex justify-center items-center gap-4 mt-3 mb-3">
              <CiInstagram className="text-xl cursor-pointer text-pizza_black  hover:text-gray-500"/>
              <CiFacebook className="text-xl cursor-pointer text-pizza_black  hover:text-gray-500"/>
              <CiTwitter className="text-xl cursor-pointer text-pizza_black  hover:text-gray-500"/>
          </div>
  
          <p className="text-gray-500 text-xs ">&copy;2023 All rights reserved</p>
      </section>
    )
  }
}

export default Footer
