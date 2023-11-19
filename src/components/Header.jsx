'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import logo from '../../public/images/logo.png'

import { RiMenuFoldLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from './MobileMenu'
import UserMenu from './UserMenu'



const Header = () => {

    const [mobile, setMobile] = useState(false)
    const [ userMenu, setUserMenu ] = useState(false)

    const session = useSession()
    const sessionStatus = session.status

    const userData = session.data?.user
    let userName = userData?.name || userData?.email
    if(userName && userName.includes(' ')){
        userName = userName.split(' ')[0]
    }


    const handleMobileMenu = () => {
        setMobile(!mobile)
    }

    const openUserMenu = () => {
        setUserMenu(!userMenu)
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
                                <div 
                                    type='button'
                                    className='btn_main bg-pizza_wood-500 hover:bg-pizza_wood-400 text-white flex items-center justify-center'
                                > 
                                    {/* <Image src={userImage} alt='user-image' /> */}
                                    {/* <p className='text-sm'>Hi, {userName[0]}</p> */}
                                    <p className='text-sm'>Hi, {userName}</p>
                                    <IoIosArrowDown 
                                        className='w-5 h-5 cursor-pointer '
                                        onClick={openUserMenu}
                                    />
                                </div>
                            )}

                            {sessionStatus === 'unauthenticated' && (
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

            <UserMenu userMenu={userMenu} setUserMenu={setUserMenu} />
            <MobileMenu mobile={mobile} setMobile={setMobile} />
        </>
    )
}

export default Header
