import React from 'react'
import hamburger from '../../images/icon-hamburger.svg';
import logo from '../../images/logo.svg';
import close from '../../images/icon-close.svg';
import { useState } from 'react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick =() => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='absolute z-10 p-8 flex justify-center items-center w-full lg:w-auto lg:items-start lg:justify-start '>
      <div className='flex justify-between' >
        <div className='absolute block lg:hidden z-20  left-6 items-center'> 
          {
            isOpen ? <button onClick={handleClick}><img src={close} alt="" /></button> :
            <button onClick={handleClick}><img src={hamburger} alt="" /></button>
          }
        </div>
        <div className='  '>
          <img src={logo} alt="" className='' />
        </div>
      </div>
  
      <nav className={` absolute top-0 left-0 w-full py-8  lg:w-auto  ${isOpen ? '' : 'hidden lg:block'} ${isOpen ? 'bg-white shadow-lg' : ''}`}  >
        <ul className='flex justify-center lg:justify-start lg:gap-14 items-center gap-8 lg:px-40 -mt-1.5'>
          <li className='lg:text-white text-xl cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>home</li>
          <li className='lg:text-white text-xl cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>shop</li>
          <li className='lg:text-white text-xl cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>about</li>
          <li className='lg:text-white text-xl cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;