import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
<form action="" className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-8'>
        <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</h1>

        <p className='text-gray-300 py-6'>Lets Talk! Shoot me an email at kamauestherofficial@gmail.com</p>
        <input type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-' type="text" placeholder='Email' name='name' />

        </div>
</form>
</div>
  )
}

export default Contact