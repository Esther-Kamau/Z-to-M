import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import GIT from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
// import Figma from '../assets/figma.png';
// import Photoshop from '../assets/photoshop.png';




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
            <img src={GIT} alt=" icon" />
            <p>HTML</p>
        </div>
       </div>

       
       </div>
  )
}

export default Skills