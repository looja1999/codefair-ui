import React, {useState} from 'react'
import { BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Dashboard = () => {

  const [open, setOpen] = useState(true)

  return (
   <div className='flex'>
      <div>
        <div className='bg-primary h-screen w-72 p-5 text-white pt-8'>
          <BsFillArrowLeftCircleFill  className='text-white text-4xl cursor-pointer absolute -right-3 top-9 border-2 border-primary rounded-full'/>
        </div>
      </div>
      <div>Home</div>
   </div>
  )
}

export default Dashboard