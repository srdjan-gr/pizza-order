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
    </>
  )
}

export default page