import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import logo from '../../public/images/logo.png'
import { MobileMenuIcon, CartIcon } from '../../constants/icons'



const Header = () => {
  return (
    <div className='shadow-md shadow-gray-300/30 backdrop-blur-sm bg-white/30 absolute top-0 left-0 z-50 w-full'>
        <div className="max-w-7xl flex justify-between items-center m-auto py-2 px-3 md:px-0">
            <Link href={'/'}>
                <Image 
                    src={logo} 
                    alt='perfect-pizza-logo'
                    width={50}
                    height={50}
                />
            </Link>
            
            <div className="flex justify-center items-center gap-4" >
                <div className='hidden md:flex justify-center items-center gap-4 text-white'>
                    <Link className='link_hover' href={'/'} >Home</Link>
                    <Link className='btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white' href={'/Order'} >Order</Link>
                    <Link className='btn_main bg-pizza_orange-500 hover:bg-pizza_orange-400 text-white' href={'/Login'} >Login</Link>
                </div>
                
                <div className="flex justify-center items-center gap-4" >
                    <MobileMenuIcon className='w-6 h-6 cursor-pointer link_hover md:hidden text-white'/>
                    <CartIcon className='w-6 h-6 cursor-pointer link_hover text-white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
