import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import InstaImg from './InstaImg';

const Insta = () => {
  return (
    <div id='work' className='max-w-[724px] mx-auto text-center pt-[83px]'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <div className='relative flex justify-center p-4'>
        <Image 
        src='/assets/instaimg/dp.jpg'
        alt='/'
        width='140' 
        height='140'
        className="object-none rounded-full"
        style={{objectFit:"contain"}}
        />
      </div>
      
      <div className='flex flex-row justify-center items-center pb-4 font-medium '>
        <div className='mr-1 hover:text-[#0f9884]'>
          <Link href="https://wwwinstagram.com/debam.roy10/" target="_blank">
            <FaInstagram size={25}/>
          </Link>
        </div>
        <div className='ml-1 hover:text-[#0f9884]'>
          <Link href="https://wwwinstagram.com/debam.roy10/" target="_blank">
            @debam.roy10
          </Link>
        </div>
      </div>
      
      <div className='relative grid grid-cols-2 md:grid-cols-3 gap-[0.125rem] py-1'>
        <InstaImg socialImg={'/assets/instaimg/i01.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i02.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i03.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i04.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i05.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i06.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i07.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i08.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i09.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i10.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i11.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i12.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i13.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i14.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i15.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i16.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i17.jpg'}/>
        <InstaImg socialImg={'/assets/instaimg/i18.jpg'}/>
      </div>
    </div>
  )
}

export default Insta
