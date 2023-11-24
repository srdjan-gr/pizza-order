import Image from "next/image"
import Link from "next/link"
import logo from '../../public/images/logo.png'
import { signOut, useSession } from 'next-auth/react'

import { IoLogOutOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2"


const MobileMenu = ({ mobile, setMobile }) => {

    const session = useSession()
    const sessionStatus = session.status

    const handleMobileMenu = () => {
        setMobile(!mobile)
    }

    const userData = session.data?.user
    const userImage = userData?.image 

    // Display shorter user name 
    let userName = userData?.name || userData?.email
    if(userName && userName.includes(' ')){
        userName = userName.split(' ')[0]
    }else{
        userName = userData?.email
    }


    return (
        <section 
            className={`${mobile ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0  w-full md:w-[380px] h-screen z-50 bg-pizza_light custom_shadow-left p-4 transition-all ease delay-250`}
        >

            <div className="flex justify-between items-start ">
                <Link href={'/'}>
                    <Image 
                        src={logo} 
                        alt='perfect-pizza-logo'
                        width={50}
                        height={50}
                    />
                </Link>

                <AiOutlineClose 
                    className='w-6 h-6 cursor-pointer'
                    onClick={handleMobileMenu}
                />
            </div>

            
            <div className='flex flex-col justify-center items-center gap-5 text-gray-800'>

                {sessionStatus === 'authenticated' && (
                    <div className="w-full ">
                        {/* <div className="divider mt-1"></div> */}

                        <div className="flex items-center justify-center end-full mb-8 mt-2">
                            <p className="w-full text-left text-md text-gray-400">Profile info</p>

                            <div className="flex items-center justify-between w-1/2">
                                <p className='text-base text-gray-400'>Hi, {userName}</p>
                                <Image src={userImage} alt='user-image' width={40} height={40} className='rounded-full '/>
                            </div>
                        </div>

                        <Link 
                            href={'/userProfile'} 
                            onClick={handleMobileMenu} 
                            className="flex items-center justify-between text-xl px-3 rounded-md cursor-pointer w-3/5 mb-3 m-auto text-gray-400">User Profile 
                            <BsPersonGear className="w-7 h-7 ml-5"/>
                        </Link>
                        <Link 
                            href={'/userProfile'} 
                            onClick={handleMobileMenu} 
                            className="flex items-center justify-between text-xl px-3 rounded-md cursor-pointer w-3/5 mb-3 m-auto text-gray-400">Previous Orders 
                            <HiOutlineArchiveBoxArrowDown className="w-7 h-7 ml-5"/>
                        </Link>
                        <p 
                            className="flex items-center justify-between text-xl px-3 rounded-mdcursor-pointer w-3/5 mb-3  m-auto cursor-pointer text-gray-400"
                            onClick={() => signOut()} 
                            >Logout 
                            <IoLogOutOutline className="w-7 h-7 ml-5"/>  
                        </p>

                        <div className="divider text-gray-300"></div>
                    </div>
                )}

                {sessionStatus === 'unauthenticated' && (
                    <Link className='btn_main bg-pizza_orange-500 hover:bg-pizza_orange-400 text-white text-xl w-2/4' 
                        href={'/login'} 
                        onClick={handleMobileMenu}
                    >
                    Login
                    </Link>
                )}


                <Link className='link_hover text-xl' href={'/'} >Home</Link>
                <Link className='link_hover text-xl' href={'/menu'} >Menu</Link>
                <Link className='link_hover text-xl' href={'/contact'} >Contact</Link>
                <Link className='link_hover text-xl' href={'/about'} >About</Link>

                <Link 
                    className='btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white text-xl w-2/4' 
                    href={'/order'} 
                    onClick={handleMobileMenu}
                >
                    Order
                </Link>

            </div>
        
        </section>
    )
}

export default MobileMenu
