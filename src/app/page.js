import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MobileMenu from '@/components/MobileMenu'

const page = () => {
  return (
    <>
      <nav className='w-full m-auto'>
        <Header />
        {/* <MobileMenu /> */}
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

