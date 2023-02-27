import React, {useState} from 'react';
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logo.png'
import {Link} from 'react-scroll'

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
        <li> <Link  to="hero" smooth={true}  duration={500} >
          Home
        </Link></li>
        <li> <Link  to="about" smooth={true}  duration={500} >
          About
        </Link></li>
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
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 '>
        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            LinkedIn <FaLinkedinIn size={30}/>
            </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333] '>
        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
          Github <FaGithub size={30}/>
            </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8d2a69] '>
        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
           Email <HiOutlineMail size={30}/>
            </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgba(6,175,3,0.2)] '>
        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
           Resume <BsFillPersonLinesFill size={30}/>
            </a>
    </li>
</ul>
</div>

</div>
   
  )
}

export default Navbar
