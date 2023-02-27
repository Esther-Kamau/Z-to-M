import React, {useState} from 'react';
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logo.png'


const Navbar = () => {
    const [nav, SetNav] = useState(false)
    const handleClick = () => SetNav(!nav)
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
<div onClick={handleClick} className='md:hidden z-10'>
 { !nav ? <FaBars className='text-3xl' /> : <FaTimes className='text-3xl' />}
</div>

{/*Mobile Menus*/}
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>  
</ul>
{/*Social Links*/}
<div className='flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center'>
        <a class href='/'>
            LinkedIn <FaFacebook size={30}/>
            </a>
    </li>
</ul>
</div>

</div>
   
  )
}

export default Navbar
