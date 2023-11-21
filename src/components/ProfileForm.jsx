'use client'

import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';


import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Spinner from './Spinner';


const ProfileForm = () => {

  const session = useSession()
  const sessionStatus = session.status

  const userData = session.data?.user
//   const userImage = userData?.image 

  const [ name, setName ] = useState('')
  const [ userImage, setUserImage ] = useState('')
  const [ savingChanges, setSavingChanges ] = useState(false)
  const [ uploadingImage, setUploadingImage ] = useState(false)


  useEffect(() => {
    if(sessionStatus === 'authenticated'){
        setName(userData?.name)
        setUserImage(userData?.image )
    }
  }, [sessionStatus, session])
  

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault()

    setSavingChanges(true)
  
    const response = await fetch('/api/userProfile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name:name, image: userImage})
    })


    if(response){
        toast.success('User info updated!')
    }
    setSavingChanges(false)
  }


  const handleImageChange = async (e) => {

    setUploadingImage(true)

    const file = e.target.files

    if(file.length === 1) {
        const data = new FormData
        data.set('file', file[0])

        const response = await fetch('./api/upload', {
            method: 'POST',
            body: data, 
        })

        const imageAwsLink = await response.json()
        setUserImage(imageAwsLink)
        setUploadingImage(false)
    }
  }


  return (
    <section className='pt-32 w-full h-screen m-auto'>

        <form 
          className='w-full m-auto flex flex-col justify-start items-center' 
          onSubmit={handleProfileInfoUpdate}  
        >
            <div className='w-full max-w-xs mb-3 flex items-center justify-center gap-4'>

                {userImage && (
                    <Image className='rounded-full mt-3 object-contain' src={userImage} width={100} height={100} alt='avatar' />
                    // <img src={userImage} alt="avatar" className='w-10 h-10' />
                )}

                <div className="form-control w-full max-w-xs">
                    <label className="label mb-1">
                        <span className="label-text text-gray-400">Change account image</span>
                    </label>

                    <label className='rounded-xl w-full max-w-xs'>
                        <input type="file" name="" id="" 
                            className='hidden' 
                            onChange={handleImageChange}
                        />
                        <span 
                            className=' text-gray-400 rounded-xl w-full max-w-xs text-center p-3 border-[1px] border-gray-300 cursor-pointer bg-white flex items-center justify-center gap-3'>Browse image
                            {uploadingImage &&  <Spinner />} 
                        </span>
                    </label>
                </div>
            </div>

            <div className="form-control w-full max-w-xs mb-3">
                <label className="label">
                <span className="label-text text-gray-400">Account Email</span>
                </label>

                <input 
                    type="text" 
                    placeholder={userData?.email} 
                    className="input input-bordered w-full max-w-xs input-md rounded-xl" 
                    disabled
                />
            </div>

            <div className="form-control w-full max-w-xs mb-3">
                <label className="label">
                    <span className="label-text text-gray-400">Name</span>
                </label>

                <input 
                    type="text" 
                    placeholder='Enter your name'
                    className="input input-bordered w-full max-w-xs input-md rounded-xl" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>


            <div className="form-control w-full max-w-xs mb-3 relative">
                <label className="label">
                    <span className="label-text text-gray-400">Change password</span>
                </label>

                <input 
                    type='text' 
                    placeholder="Enter new password" 
                    className="input input-bordered w-full max-w-xs input-md rounded-xl"
                    //   disabled = {logdinUser} 
                    //   value={password} 
                    //   onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            


            <button  
                className={`${savingChanges ? 'bg-gray-300' : 'bg-pizza_green-500 hover:bg-pizza_green-400' } btn_main text-white w-full max-w-xs mb-8 mt-4 relative`}
                disabled = {savingChanges}  
            >
                Save changes
                {savingChanges &&  <Spinner />} 
            </button>

        </form>

        <Toaster />
    </section>
  )
}

export default ProfileForm
