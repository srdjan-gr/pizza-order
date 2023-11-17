import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RegisterForm from '@/components/RegisterForm'

const page = () => {
  return (
    <>
      <nav className='w-full m-auto'>
        <Header />
      </nav>

      <main className='m-auto '>
        <RegisterForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page