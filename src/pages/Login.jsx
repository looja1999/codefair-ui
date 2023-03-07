import React  from 'react'
import Navbar from '../components/Navbar'


const Login = () => {

  return (
    <div className='w-full'>

      <Navbar />
      
      <div className='max-w-[400px] flex flex-col mx-auto h-screen mt-[-60px] items-center justify-center'>
        <h1 className='text-2xl text-[#056571] p-4 w-[100%] text-center font-semibold capitalize'>Portal Login</h1>
        <input className='md:w-full w-[350px] p-4 border border-gray-[700] mt-2 rounded-md' placeholder='Enter Email' />
        <input className='md:w-full w-[350px] p-4 border border-gray-[700] mt-4 rounded-md' placeholder='Enter Password' />
        <button className='bg-[#056571] py-3 border-2 text-white font-bold md:w-full w-[350px] rounded-md mt-6 mb-4 hover:bg-white hover:text-[#056571] hover:border-[#056571]'>Login</button>
        <div className='w-full flex flex-col justify-center items-end cursor-pointer'>
          <p className='text-[#056571] font-bold  hover:text-[#05647178]'>Forgot Password ?</p>
        </div>
      </div>
      <div className='fixed bottom-0 w-full h-auto p-4 flex flex-col justify-center items-center border-t border-b-gray-500'>
        <p className='text-[#056571] md:p-0 font-bold  hover:text-[#05647178] cursor-pointer'>Don't have an account? Sign up</p>
      </div>
    </div>   
  )
}

export default Login