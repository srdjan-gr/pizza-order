'use client'

import Image from 'next/image'
import Link from 'next/link'


import googleIcon from '../../public/images/google.png'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from 'react'


const LoginForm = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ seePass, setSeePass ] = useState(false)

  const seePassHandle = () => {
    setSeePass(!seePass)
  }

  return (
    <section className='pt-32 w-full h-screen  m-auto'>
        <form action="" className='w-full m-auto flex flex-col justify-center items-center' >

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text text-gray-400">Enter your email</span>
            </label>
            <input 
                type="text" 
                placeholder="Your email" 
                className="input input-bordered w-full max-w-xs input-md rounded-xl" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs mb-8 relative">
            <label className="label">
              <span className="label-text text-gray-400">Enter your password</span>
            </label>

            {
                !seePass ?
                    <input  
                        type="password"  
                        placeholder="Your password" 
                        className="input input-bordered w-full max-w-xs input-md rounded-xl"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    /> :
                    <input  
                        type="text"  
                        placeholder="Your password" 
                        className="input input-bordered w-full max-w-xs input-md rounded-xl"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    /> 
            }

            {
                !seePass ?
                    <IoEyeOffOutline 
                        className='absolute right-3 top-[51px] text-xl text-gray-400 cursor-pointer'
                        onClick={seePassHandle}    
                    />
                :
                <IoEyeOutline 
                    className='absolute right-3 top-[51px] text-xl text-gray-400 cursor-pointer'
                    onClick={seePassHandle} 
                />
            }
          </div>

          <button className='btn_main bg-pizza_red-500 text-white w-full max-w-xs hover:bg-pizza_red-400 mb-8' >Register</button>

          <Link href={'/login'} className='text-right w-full max-w-xs underline text-pizza_red-400 hover:text-pizza_red-200'>Back to Login</Link>

        </form>
    </section>
  )
}

export default LoginForm
