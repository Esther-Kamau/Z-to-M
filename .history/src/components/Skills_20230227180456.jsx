import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import Javascript from '../assests/javascript.png';
import GIT from '../assests/github.png';
import Tailwind from '../assests/tailwind.png';
import Figma from '../assests/figma.png';
import SQL from '../assests/sql.png';




const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]  text-gray-300'>
       {/*Container*/}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
            <p className='py-4'>// These are the Technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={HTML} alt="HTML icon" />
            <p>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={CSS} alt="CSS icon" />
            <p>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={Javascript} alt="JS icon" />
            <p>Javascript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={GIT} alt="GIT icon" />
            <p>Github</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={Tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={Figma} alt="Figma icon" />
            <p>Figma</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover'>
            <img src={SQL} alt="SQL icon" />
            <p>SQL</p>
        </div>
        </div>
       </div>

       
       </div>
  )
}

export default Skills