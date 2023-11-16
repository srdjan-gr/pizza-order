import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <section className=" bg-white absolute bottom-0 left-0 z-50 w-full text-gray-800 flex justify-center items-center flex-col p-4 custom_shadow-top">
        <h1 className="text-xl font-ibm">perfect <span className="text-orange-500">pizza</span></h1>
        <p className="text-gray-500 ">&copy;All rights reserved</p>

        
        <div className="flex justify-center items-center gap-4 mt-4">
            <CiInstagram className="text-xl cursor-pointer text-pizza_black  hover:text-gray-500"/>
            <CiFacebook className="text-xl cursor-pointer text-pizza_black  hover:text-gray-500"/>
        </div>
    </section>
  )
}

export default Footer
