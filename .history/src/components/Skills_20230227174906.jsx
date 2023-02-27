import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import Javascript from '../assests/javascript.png';
import GIT from '../assests/github.png';
import Tailwind from '../assests/tailwind.png';
import Figma from '../assets/figma.png';
import SQL from '../asseSts/SQL.png';




const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
       {/*Container*/}
       <div>
        <div>
            <p>Experience</p>
            <p>// These are the Technologies I've worked with</p>
        </div>
        <div>
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
       </div>

       
       </div>
  )
}

export default Skills