import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate = useNavigate()

  function handleClick() {
    navigate('/profile')

  }


  return (
    <div>
      <Layout>
        
        <div className='container h-[100vh] p-4 w-full'>{/* Main container */}
          <div className='w-[67%]'>
          <Title Text1={`Signin to your PopX account`}/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum ratione itaque  tempore  voluptates obcaecati ex ipsum rerum?</p>
        <div>
        <form>
          
          <div className="relative w-full pt-4 mb-5">
            {/* For emaiL  */}
            <label htmlFor="email" className="absolute left-3 bg-[#F7F8F9] px-1 text-sm text-purple-600">
              Email
            </label>
            <input id="email" className="w-full px-3 py-4 border border-gray-300 rounded-md" type="email" />
          </div>
          {/* For Password */}
          <div className="relative w-full">
            <label htmlFor="password" className="absolute left-3 bg-[#F7F8F9] px-1 text-sm text-purple-600">
              Password
            </label>
            <input id="password" className="w-full px-3 py-4 border border-gray-300 rounded-md" type="password" />
          </div>
          {/* Login Button */}
         <div className="flex justify-center w-full mt-6">
          <button onClick={()=>handleClick()} className="bg-[#6C25FF] text-white text-[16px] w-full max-w-[335px] h-[46px] rounded-[6px] cursor-pointer">
            Login
          </button>
          </div>
        </form>
        </div>
        </div>
      </Layout>
    </div>
  )
}

export default Login
