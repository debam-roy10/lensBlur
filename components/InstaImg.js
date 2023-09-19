import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const InstaImg = ({socialImg}) => {
  return (
    <div className='relative'>
      <Image 
      src={socialImg} 
      alt='/'  
      width='200' 
      height='200'
      className="w-auto h-60 object-cover"
      />
      {/* overlay */}
      <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
        <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30}/></p>
      </div>
    </div>
  )
}

export default InstaImg
