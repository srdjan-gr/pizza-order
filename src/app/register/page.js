import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RegisterForm from '@/components/RegisterForm'

const page = () => {
  return (
    <>
      <nav className='w-full m-auto'>
        <Header />
      </nav>

      <main className='m-auto bg-pizza_light'>
        <RegisterForm />
      </main>

      <footer className='w-full m-auto '>
        <Footer />
      </footer>
    </>
  )
}

export default page