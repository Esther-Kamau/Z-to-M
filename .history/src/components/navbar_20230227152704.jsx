import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assests/logo.png'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
<div>
    <img src={Logo} alt='logo image' style={{width: '180px'}} />
</div>
<div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>





        
    </ul>


</div>
    </div>
  )
}

export default Navbar
