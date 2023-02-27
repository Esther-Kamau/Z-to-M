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
    <ul className='flex items'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
</ul>

{/*Hamburger*/}
<div className='hidden'>
    <FaBars />
</div>

{/*Mobile Menus*/}
<ul className='hidden'>
<li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>  
</ul>
{/**/}

</div>
    </div>
  )
}

export default Navbar
