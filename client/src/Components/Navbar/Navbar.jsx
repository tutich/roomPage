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
    <div className='absolute z-10 p-8 flex justify-center items-center w-full lg:w-auto lg:flex-start '>
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
      <nav className={`bg-white absolute top-0 left-0 w-full py-8 lg:py-0 lg:w-auto shadow-lg ${isOpen ? '' : 'hidden'} `}  >
        <ul className='flex justify-center items-center gap-8'>
          <li className='cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>home</li>
          <li className='cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>shop</li>
          <li className='cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>about</li>
          <li className='cursor-pointer border-b-4 border-transparent hover:border-neutral-900 transition-all durarion-500'>contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;