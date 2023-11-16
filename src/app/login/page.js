import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'
const page = () => {
  return (
    <>
      <nav className='w-full m-auto'>
        <Header />
      </nav>

      <main className='m-auto bg-pizza_light'>
        <LoginForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page