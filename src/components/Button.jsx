import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {

  const navigate = useNavigate()


  function handleclick(isSignUp) {
    if (isSignUp) {
      navigate('/signup')
    }else{
      navigate('/login')
    }
  }

  return (
    <div>
      <button onClick={()=>handleclick(true)}  className='bg-[#6C25FF] mb-2 mt-2 text-[16px]  text-white w-[335px] cursor-pointer h-[46px]  rounded-[6px] opacity-[1]'>Create Account</button>
      <button onClick={()=>handleclick(false)} className='bg-[#6C25FF4B] text-[16px] text-[#1D2226] w-[335px] cursor-pointer  h-[46px] rounded-[6px]'>Already Registered? Login</button>
    </div>
  )
}

export default Button
