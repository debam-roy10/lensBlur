import React from 'react'
import Link from 'next/link'

const Hero = ({heading, msg}) => {
  return (
    <div id="home" className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2] backdrop-blur-sm'/>
      <div className='p-5 max-w-[700px] text-white z-[2] mt-[-5rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{msg}</p>
        <button className='px-8 py-2 border hover:bg-black/30 transition ease-in-out duration-200'><Link href="#contact" scroll={false} >Get in touch</Link></button>
      </div>
    </div>
  )
}

export default Hero
