import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <>
      <nav className='w-full m-auto'>
        <Header />
      </nav>

      <main className='m-auto'>
        <Hero />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page

