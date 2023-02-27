import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi, my name is </p>
            <h1>Esther Kamau</h1>
            <h2>I'm a Front-End Developer and UI/UX Designer</h2>
            <p>I'm an aspiring Front-end Developer </p>
        </div>
    </div>
  )
}

export default Hero
