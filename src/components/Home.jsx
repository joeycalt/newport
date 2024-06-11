import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='Home' className='h-screen w-full bg-gradient-to-b bg-black'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row text-white '>
            <div className='flex flex-col justify-center h-full px-5'>
                <h2 className='text-8xl sm:text-7xl font-bold font-family'>Hi! I'm
                <span className='text-green-400'> Joey,</span>
                <div className='text-4xl sm:text-4xl'>a Frontend Developer based in Long Island, NY</div></h2>
                <p className='pt-10 sm:text-3xl text-4xl'>Previously I was a plumber (new year, new me) but currently, I love to work on projects using technologies such as React, JavaScript, Tailwind, and much more!</p>
                <div>
                    <Link 
                    to='Projects'
                    smooth duration={500}
                    className='group w-fit py-3 px-3 my-2 mt-5 flex items-center rounded-md bg-green-400 text-black cursor-pointer'>
                        View my Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home