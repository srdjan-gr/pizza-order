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
    </>
  )
}

export default page