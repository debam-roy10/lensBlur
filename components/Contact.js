import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1240px] m-auto p-4 h-screen pt-24'>
      <h1 className='text-2xl font-bold text-center p-4 pb-8'>Let's work together!</h1>
      <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type='text' placeholder='Name' />
          <input className='border shadow-lg p-3' type='email' placeholder='Email' />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' cols='30' rows='10' placeholder='Message' />
        <button className='border font-medium shadow-lg p-3 w-full mt-2 hover:bg-gray-200 transition ease-in-out duration-200'>Submit</button>
      </form>
      <p className='text-normal font-medium text-center text-black pt-24'>© 2023 lensBlur -
        <Link href="https://wwwinstagram.com/debam.roy10/" target="_blank" className="ml-1 hover:text-[#0f9884]" >@debam.roy10</Link>
      </p>
    </div>
  )
}

export default Contact
