'use client'

import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';

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
  

//   Saving updated user info
  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault()

    setSavingChanges(true)

    const savingPromise = new Promise (async (resolve, reject) => {

        const response = await fetch('/api/userProfile', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name:name, image: userImage})
        })

        if(response.ok){
            resolve()
        }else{
            reject()
        }
    })
  
    await toast.promise(savingPromise, {
        loading: 'Saving...',
        success: 'User info updated!',
        error: 'Error occurred!',
    })

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
            <div className='w-full max-w-xs mb-3 flex items-center justify-start'>

                <div className='w-1/3 mt-3'>
                    <div 
                        style={{width: '80px', height: '80px', background: 'rgba(0, 0, 0, 0.05)', position: 'relative', borderRadius: '100%'}} 
                    >
                        {userImage && (
                            <Image 
                                className='rounded-full' 
                                src={userImage}  alt='avatar'  
                                layout="fill"
                                objectFit='contain'
                            />
                        )}
                    </div>
                </div>

                <div className="form-control w-2/3">
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


    </section>
  )
}

export default ProfileForm
