'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import logo from '../../public/images/logo.png'

import { RiMenuFoldLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import MobileMenu from './MobileMenu'



const Header = () => {

    const [mobile, setMobile] = useState(false)

    const session = useSession()
    const sessionStatus = session.status


    const handleMobileMenu = () => {
        setMobile(!mobile)
    }


    return (
        <>
            <div className='shadow-md shadow-gray-300/20 backdrop-blur-sm bg-white/30 absolute top-0 left-0 z-40 w-full '>

                <div className="max-w-7xl flex justify-between items-center m-auto py-2 px-3 lg:px-0">
                    <Link href={'/'}>
                        <Image 
                            src={logo} 
                            alt='perfect-pizza-logo'
                            width={50}
                            height={50}
                        />
                    </Link>
                    
                    <div className="flex justify-center items-center gap-4" >
                        <div className='hidden md:flex justify-center items-center gap-4 text-gray-800'>
                            <Link className='link_hover' href={'/'} >Home</Link>
                            <Link className='link_hover' href={'/menu'} >Menu</Link>
                            <Link className='link_hover' href={'/contact'} >Contact</Link>
                            <Link className='link_hover' href={'/about'} >About</Link>
                            <Link className='btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white' href={'/order'} >Order</Link>


                            {sessionStatus === 'authenticated' && (
                                <button 
                                    className='btn_main bg-pizza_wood-500 hover:bg-pizza_wood-400 text-white'
                                    onClick={() => signOut()} 
                                >Logout
                                </button>
                            )}

                            {sessionStatus !== 'authenticated' && (
                                <Link className='btn_main bg-pizza_orange-500 hover:bg-pizza_orange-400 text-white' href={'/login'} >Login</Link>
                            )}

                        </div>
                        
                        <div className="flex justify-center items-center gap-4 text-gray-800" >
                            <RiMenuFoldLine 
                                className='w-6 h-6 cursor-pointer link_hover md:hidden '
                                onClick={handleMobileMenu}
                            />

                            <HiOutlineShoppingCart className='w-6 h-6 cursor-pointer link_hover '/>
                        </div>
                    </div>

                    
                </div>

            </div>

            <MobileMenu mobile={mobile} setMobile={setMobile} />
        </>
    )
}

export default Header
