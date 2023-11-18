import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RegisterForm from '@/components/RegisterForm'

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className='m-auto '>
        <RegisterForm />
      </main>

      {/* Footer imported from man Layout */}
    </>
  )
}

export default page