'use client'

import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from 'react'
import Spinner from './Spinner';


const LoginForm = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ seePass, setSeePass ] = useState(false)
  const [ createUser, setCreateUser ] = useState(false)
  const [ error, setError ] = useState(false)


  const seePassHandle = () => {
    setSeePass(!seePass)
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault()
 
    setCreateUser(true)

    if(!email && !password){
        toast.error('All fields are required!')
        setCreateUser(false)
        return
    }
    
    // try {
    //     await fetch('/api/register', {
    //         method: 'POST',
    //         body: JSON.stringify({email, password}),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    // } catch (error) {
    //     toast.error(error)
    //     setError(true)
    // }

    const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}
    })

    if(!response.ok){
        toast.error(response.statusText)
        setCreateUser(false)
        return
    }

    setCreateUser(false)
    toast.success('User created!')
    setEmail('')
    setPassword('')
  }



  return (
    <section className='pt-32 w-full h-screen  m-auto'>
        <form 
            className='w-full m-auto flex flex-col justify-center items-center' 
            onSubmit={handleFormSubmit}
        >

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

            <input  
                type={!seePass ? 'password' : 'text'}  
                placeholder="Your password" 
                className="input input-bordered w-full max-w-xs input-md rounded-xl"
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
                className={`${createUser ? 'bg-gray-300' : ' bg-pizza_red-500 hover:bg-pizza_red-400' } btn_main text-white w-full max-w-xs mb-8 relative`}
                disabled = {createUser}  
            >
                Register
                {createUser &&  <Spinner />}
               
            </button>

          <Link href={'/login'} className='text-right w-full max-w-xs underline text-pizza_red-400 hover:text-pizza_red-200'>Back to Login</Link>

        </form>


        <Toaster />
    </section>
  )
}

export default LoginForm
