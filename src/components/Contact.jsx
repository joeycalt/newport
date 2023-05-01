import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-black text-white p-4 px-10'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='md:text-6xl text-3xl font-bold inline text-green-400'>Contact</p>
                <p className='py-3 text-base'>Submit a form below to connect</p>
            </div>
            <div className=''>
                <form action='https://getform.io/f/acbe2159-4c3b-495c-92f5-a1d58a68549e' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2  bg-black rounded-md text-white focus:outline-none' />
                    <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent my-4 border-2 bg-black rounded-md text-white focus:outline-none' />
                    <textarea type='text' name='message' 
                    placeholder='Enter your message'
                    rows= '10'
                    className='p-2 bg-transparent border-2 bg-black rounded-md text-white focus:outline-none'>
                    </textarea>
                    <button className='text-black bg-green-400 px-6 py-3 my-8 rounded-md hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact