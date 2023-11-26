import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className='m-auto bg-pizza_light'>
        <LoginForm />
      </main>

      {/* Footer imported from man Layout */}
    </>
  )
}

export default page