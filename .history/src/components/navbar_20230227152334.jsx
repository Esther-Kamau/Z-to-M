import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assests'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
<div>
    <img src={Logo} alt='logo image' className='w-20 h-20' />
</div>

    </div>
  )
}

export default Navbar
