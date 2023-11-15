import Image from 'next/image'
import Link from 'next/link'


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

          <button className='btn_main bg-pizza_red-500 text-white w-full max-w-xs hover:bg-pizza_red-400 mb-8' >Register</button>

          <Link href={'/login'} className='text-right w-full max-w-xs underline text-pizza_red-400 hover:text-pizza_red-100'>Back to Login</Link>

        </form>

    </section>
  )
}

export default LoginForm
