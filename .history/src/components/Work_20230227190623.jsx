import React from 'react'
import WorkImg from '../assests/projects/workImg.jpeg';
import realestate from '../assests/projects/realestate.jpg';



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
        <p className='py-8'>These are some of my projects</p>
    </div>
    {/*Container for the work done*/}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/*grid card item*/}
    {/* passing through our image dynamically */}
        <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center mx-auto content-div'>
            {/*Hover Effects*/}
            <div className='flex flex-col opacity-0 group-hover:opacity-100'>
                       <span className='flex justify text-2xl font-bold text-white tracking-wider'>
                      React-JS Application
                       </span>
                        <div>
                            <a href="/">
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-purple-300 font-bold text-lg'>Demo</button> 
                            </a>
                            <a href="/">
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-purple-300 font-bold text-lg'>Code</button> 
                            </a>
                        </div>
                   
                 </div>
        </div>
        {/*grid item*/}

    </div>
</div>
    </div>
  )
}

export default Work