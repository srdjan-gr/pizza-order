import Image from "next/image"
import Link from "next/link"
import logo from '../../public/images/logo.png'


import { AiOutlineClose } from "react-icons/ai";


const MobileMenu = ({ mobile, setMobile }) => {

    const handleMobileMenu = () => {
        setMobile(!mobile)
    }


    return (
        <section 
            className={`${mobile ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0  w-full md:w-[380px] h-screen z-50 bg-pizza_light custom_shadow-left p-4 transition-all ease delay-250`}
        >

            <div className="flex justify-between items-start mb-10">
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
                <Link className='link_hover text-xl' href={'/'} >Home</Link>
                <Link className='link_hover text-xl' href={'/menu'} >Menu</Link>
                <Link className='link_hover text-xl' href={'/contact'} >Contact</Link>
                <Link className='link_hover text-xl' href={'/about'} >About</Link>

                <Link className='btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white mt-10 text-xl w-2/4' href={'/order'} onClick={handleMobileMenu}>Order</Link>
                <Link className='btn_main bg-pizza_orange-500 hover:bg-pizza_orange-400 text-white text-xl w-2/4 ' href={'/login'} onClick={handleMobileMenu} >Login</Link>
            </div>
        
        </section>
    )
}

export default MobileMenu
