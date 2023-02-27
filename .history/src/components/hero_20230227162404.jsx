import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Esther Kamau</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#]'>I'm a Front-End Developer and UI/UX Designer</h2>
            <p>I'm an aspiring Front-end Developer specializing in building and designing exceptional
                digital experiences. Currently, I'm focused on upskilling while building more responsive applications.
            </p>
            <div>
                <button>View Work <HiArrowNarrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Hero
