'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer' ;
import { AutoAwesome  , Star  } from '@mui/icons-material' ;
import { Visibility, VisibilityOff, Email, Lock, Google, Facebook} from "@mui/icons-material"
import { motion } from "framer-motion"

export default function SigninPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword ,setShowPassword]  = useState(false)
  const [error, setError] = useState('')

  const ENCRYPTED = 'c2FtQGdtYWlsLmNvbTpzYW1AMTIz'

  useEffect(() => {
    if (localStorage.getItem('auth') === ENCRYPTED) {
      router.push('/adminpanel/home')
    }
  }, [router])

  const handleLogin = (e) => {
    e.preventDefault()
    const credentials = btoa(`${email}:${password}`)
    if (credentials === ENCRYPTED) {
      localStorage.setItem('auth', ENCRYPTED)
      router.push('/adminpanel/home')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <>
      <Navbar />

       <div className='w-full md:flex justify-center gap-3 pt-20  bg-gradient-to-br from-orange-50 via-amber-50 to-red-50  items-center ' >

        {/* left part of singin Page */}

      <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2  text-center lg:text-left "
        >
          <div className="mb-8">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                TalkAstro
              </h1>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Welcome Back to Your
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Spiritual Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with expert astrologers and discover the wisdom of the cosmos. Your path to enlightenment
              continues here.
            </p>
          </div>

          {/* Features */}
          <div className="lg:w-1/2 hidden lg:block space-y-4">
            {[
              { icon: <AutoAwesome className="h-5 w-5" />, text: "Expert Astrologers Available 24/7" },
              { icon: <Star className="h-5 w-5" />, text: "Personalized Readings & Guidance" },
              { icon: <AutoAwesome className="h-5 w-5" />, text: "Ancient Wisdom, Modern Convenience" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                className="flex items-center text-gray-700"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* right part of signin page  */}

      <div className="md:min-h-screen  flex items-center justify-center pb-12 px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md transition-all duration-300 transform hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-black text-center mb-2">
            Sign In
          </h2> 
       
          <p className='text-gray-500 font-medium mb-6' >Enter your credentials to access your account</p>

          <form onSubmit={handleLogin} className="space-y-5"> 
             <div className='flex flex-col gap-10' >

              <div className='relative'>
             <span className='mb-2 inline-block'>Email Address</span>
              <Google className="absolute left-3 top-14 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full  px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /> 
            </div>
           

           <div className='relative'>

             <span className='mb-2 inline-block'>Password</span> 
              <Lock className="absolute left-3 top-14 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input             
              type={showPassword ?"password" : "text"}
              placeholder="Password"
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button   
              type='button'
            className='absolute right-3 top-12  hover:cursor-pointer' 
            onClick={()=>setShowPassword(!showPassword)}
            > 
          {   showPassword ?
            <Visibility />  :
            <VisibilityOff/>}
            </button> 
           </div> 


            {error && (
              <p className="text-center text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all shadow hover:shadow-lg"
            >
              Sign In
            </button>
           
            </div>

          </form>
        </div>
      </div>


      </div>

      <Footer />
    </>
  )
}
