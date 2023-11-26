import React from 'react'
import Spinner from './Spinner'

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 z-[100] w-full h-screen bg-white/80">
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-3 w-[100px]'>
          
          <Spinner />
          <p className='text-gray-400'>Loading...</p>
        </div>
    </div>
  )
}

export default Loading
