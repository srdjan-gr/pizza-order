import { IoLogOutOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { signOut, useSession } from 'next-auth/react'
import Link from "next/link";


const UserMenu = ({ userMenu, setUserMenu }) => {

    const session = useSession()
    const sessionStatus = session.status

    return (

        // {sessionStatus === 'authenticated' && (

            <div className={`${userMenu ? 'md:block hidden' : 'hidden'} max-w-7xl m-auto absolute top-20 md:right-[70px] xl:right-[170px]  transition-all ease delay-250 bg-pizza_light rounded-lg w-[160px] py-3 px-2`}>

                <Link href={'/userProfile'} className="flex items-center justify-between text-md px-3 py-1 rounded-md hover:bg-pizza_wood-100 cursor-pointer">User Profile <BsPersonGear className="w-6 h-6"/></Link>
                <p 
                    className="flex items-center justify-between text-md px-3 py-1 rounded-md hover:bg-pizza_wood-100 cursor-pointer"
                    onClick={() => signOut()} 
                    >Logout 
                    <IoLogOutOutline className="w-6 h-6"/>  
                </p>
            </div>
        // )}
    )
}

export default UserMenu
