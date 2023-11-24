'use client'

import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast';


import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Spinner from './Spinner';


const LoginForm = () => {

  const session = useSession()
  const sessionStatus = session.status

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ seePass, setSeePass ] = useState(false)
  const [ logdinUser, setLogedinUser ] = useState(false)

  const seePassHandle = () => {
    setSeePass(!seePass)
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault()

    setLogedinUser(true)

    if(!email && !password){
      toast.error('All fields are required!')
      setLogedinUser(false)
      return
    }


    const loginPromise = new Promise(async (resolve, reject) => {

      // Next Auth
      const response = await signIn('credentials', {email, password, callbackUrl: '/'})
      // const response = await signIn('credentials', {email, password})

      response.ok ? resolve() : reject()
       
    })

    await toast.promise(loginPromise, {
      loading: 'Loading...',
      success: 'You are Loged In!',
      error: 'Error occurred!',
    })


    setLogedinUser(false)
  }


  return (
    <section className='pt-32 w-full h-screen m-auto'>

        <form 
          className='w-full m-auto flex flex-col justify-center items-center' 
          onSubmit={handleFormSubmit}  
        >
          <h1 className='mb-5 text-xl text-gray-400 w-full max-w-xs underline'>Login form</h1>

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text text-gray-400">Enter your email</span>
            </label>

            <input 
              type="text" 
              placeholder="Your email" 
              className="input input-bordered w-full max-w-xs input-md rounded-xl" 
              disabled = {logdinUser} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="form-control w-full max-w-xs mb-8 relative">
            <label className="label">
              <span className="label-text text-gray-400">Enter your password</span>
            </label>

            <input 
              type={!seePass ? 'password' : 'text'}  
              placeholder="Your password" 
              className="input input-bordered w-full max-w-xs input-md rounded-xl"
              disabled = {logdinUser} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
      
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


          <button  
              className={`${logdinUser ? 'bg-gray-300' : 'bg-pizza_orange-500 hover:bg-pizza_orange-400' } btn_main text-white w-full max-w-xs mb-8 relative`}
              disabled = {logdinUser}  
          >
              Login
              {logdinUser &&  <Spinner />} 
          </button>

          <Link href={'/registration'} className='text-right w-full max-w-xs underline text-pizza_red-400 hover:text-pizza_red-200'>Create Account</Link>

          <div className='border-b border-gray-300 w-full max-w-xs mt-4' ></div>

        </form>


        <div className="form-control w-full max-w-xs mb-4 mt-4 m-auto">
          <label className="label">
            <span className="label-text text-gray-400">Or, login with Google account</span>
          </label>
          
          <button 
            className='flex justify-center items-center gap-2 btn_main border border-gray-300 text-gray-500 w-full max-w-xs hover:bg-gray-200/50 ' 
            onClick={() => signIn('google', {callbackUrl: '/'})}
          >
            <FcGoogle className='h-5 w-5' />
            Login with Google
            {/* {sessionStatus === 'loading' &&  <Spinner />} */}
          </button>
        </div>

    </section>
  )
}

export default LoginForm
