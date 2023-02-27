import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assests/logo.png'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
<div>
    <img src={Logo} alt='logo image' style={{width: '180px'}} />
</div>

{/*Menus*/}

    <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
</ul>

{/*Hamburger*/}
<div className='md:hidden'>
    <FaBars />
</div>

{/*Mobile Menus*/}
<ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>  
</ul>
{/*Social Links*/}
<div className='hidden'>

</div>

</div>
   
  )
}

export default Navbar
