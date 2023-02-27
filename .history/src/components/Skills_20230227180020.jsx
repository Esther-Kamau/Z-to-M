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
        <div >
            <img src={HTML} alt="HTML icon" />
            <p>HTML</p>
        </div>
        <div>
            <img src={CSS} alt="CSS icon" />
            <p>CSS</p>
        </div>
        <div>
            <img src={Javascript} alt="JS icon" />
            <p>Javascript</p>
        </div>
        <div>
            <img src={GIT} alt="GIT icon" />
            <p>GIT</p>
        </div>
        <div>
            <img src={Tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
        </div>
        <div>
            <img src={Figma} alt="Figma icon" />
            <p>Figma</p>
        </div>
        <div>
            <img src={SQL} alt="SQL icon" />
            <p>SQL</p>
        </div>
       </div>

       
       </div>
  )
}

export default Skills