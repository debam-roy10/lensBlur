import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [hover, setHover] = useState('#0f9884')


    const handleNav = ()=>{
        setNav(!nav)
    };

    useEffect(() => {
      const changeColor = () => {
        if(window.scrollY >= 90){
            setColor('white');
            setTextColor('black');
            setHover('#0f9884');
        } else{
            setColor('transparent');
            setTextColor("white");
            setHover('#0f9884');
        }
      };
      window.addEventListener('scroll', changeColor)
    }, []);
    
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href="#home" scroll={false} >
            <h1 style={{color: `${textColor}`}} className='font-bold text-3xl'>lensBlur</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
            <li className={`p-4 hover:text-[${hover}] font-medium`}>
                <Link href="#home" scroll={false} >Home</Link>
            </li>
            <li className={`p-4 hover:text-[${hover}] font-medium`}>
                <Link href="#gallery" scroll={false} >Gallery</Link>
            </li>
            <li className={`p-4 hover:text-[${hover}] font-medium`}>
                <Link href="#work" scroll={false} >Work</Link>
            </li>
            <li className={`p-4 hover:text-[${hover}] font-medium`}>
                <Link href="#contact" scroll={false} >Contact</Link>
            </li>
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
            {nav ? (<AiOutlineClose size={20} style={{color: `{white}`}}/>) : (<AiOutlineMenu size={20} style={{color: `${textColor}`}}/>)}
        </div>

        {/* mobile menu */}
        <div className= {nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/60 backdrop-blur-md text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/60 backdrop-blur-md text-center ease-in duration-300'}>
            <ul>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href="#home" scroll={false} >Home</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href="#gallery" scroll={false} >Gallery</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href="#work" scroll={false} >Work</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href="#contact" scroll={false} >Contact</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
