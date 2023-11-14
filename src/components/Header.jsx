import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import logo from '../../public/images/logo.png'
import MobileMenuIcon from '../../constants/icons'



const Header = () => {
  return (
    <div className='shadow-md shadow-gray-300/30 backdrop-blur-sm bg-white/30'>
        <div className="max-w-7xl flex justify-between items-center m-auto p-3 md:p-0">
            <Link href={'/'}>
                <Image 
                    src={logo} 
                    alt='perfect-pizza-logo'
                    width={60}
                    height={60}
                />
            </Link>
            
            <div className="flex justify-center items-center gap-4" >
                <div className='hidden md:flex justify-center items-center gap-4 text-pizza_gray'>
                    <Link className='link_hover' href={'/'} >Home</Link>
                    <Link className='btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white' href={'/Order'} >Order</Link>
                    <Link className='btn_main bg-pizza_orange-500 hover:bg-pizza_orange-400 text-white' href={'/Login'} >Login</Link>
                </div>
                
                <div className="flex md:hidden justify-center items-center cursor-pointer" >
                    <MobileMenuIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
