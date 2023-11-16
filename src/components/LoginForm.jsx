import Image from 'next/image'
import Link from 'next/link'

import { CiTwitter } from "react-icons/ci";
import googleIcon from '../../public/images/google.png'

const LoginForm = () => {
  return (
    <section className='pt-32 w-full h-screen m-auto'>

        <form action="" className='w-full m-auto flex flex-col justify-center items-center' >

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text text-gray-400">Enter your email</span>
            </label>
            <input type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs input-md rounded-xl" />
          </div>

          <div className="form-control w-full max-w-xs mb-8">
            <label className="label">
              <span className="label-text text-gray-400">Enter your password</span>
            </label>
            <input type="text" placeholder="Your password" className="input input-bordered w-full max-w-xs input-md rounded-xl" />
          </div>

          <button className='btn_main bg-pizza_orange-500 text-white w-full max-w-xs hover:bg-pizza_orange-400 mb-8' >Login</button>

          <Link href={'/register'} className='text-right w-full max-w-xs underline text-pizza_red-400 hover:text-pizza_red-100'>Create Account</Link>

          <div className='border-b border-gray-300 w-full max-w-xs mt-4' ></div>

          <div className="form-control w-full max-w-xs mb-4 mt-4">
            <label className="label">
              <span className="label-text text-gray-400">Or, login with Google account</span>
            </label>
            <button className='flex justify-center items-center gap-2 btn_main border border-gray-300 text-gray-500 w-full max-w-xs hover:bg-gray-100 ' >
              <Image src={googleIcon} alt='google-icon' width={20} height={20}  />
              Login with Google
            </button>
          </div>

        </form>

    </section>
  )
}

export default LoginForm
