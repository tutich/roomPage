import React from 'react'
import hamburger from '../../images/icon-hamburger.svg';
import logo from '../../images/logo.svg';


const Navbar = () => {
  return (
    <div className='absolute z-10 p-8 flex flex-start'>
      <img src={hamburger} alt="" className='block lg:hidden'/>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar;