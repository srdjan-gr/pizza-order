import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <nav className='w-full m-auto'>
        <Header />
      </nav>

      <main className='m-auto'>
        <Hero />
      </main>
    </>
  )
}

export default page

