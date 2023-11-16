import Link from 'next/link'
import heroDesktop from '../../public/images/hero-desktop.jpg'
import { ArrowRight } from '../../constants/icons'

const Hero = () => {
  return (
    <section
        style={{ backgroundImage: `url(${heroDesktop.src})` }}
        className="h-screen w-full bg-cover bg-center bg-no-repeat z-10 "     
    >

        {/* Image overlay */}
        <div className="w-full h-screen bg-gray-500/30"></div>

        <div className='w-full absolute bottom-1/2 left-0 translate-y-1/2'>
            <div className="max-w-7xl m-auto ">

                <h1 className='text-7xl font-bold leading-[1.2] text-pizza_dark'>Perfect Place <br /> for <span className='font-ibm text-transparent bg-clip-text bg-gradient-to-r from-pizza_green-500 to-pizza_orange-400'>Perfect Pizza</span></h1>

                <p className='w-1/3 mt-5 text-lg'>Our online platform offers a premium selection, delivery and taste to place Perfect Pizza directly to your table. Try it now.</p>

                <div className="mt-10 btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white flex justify-center items-center cursor-pointer gap-2 w-[170px]">
                    <Link href={'/'}>Order Now </Link>
                    <ArrowRight className='w-6 h-6 ' />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero
