import React from 'react'
import Rav from '../assets/rav.png'

const About = () => {
  return (
    <div name='About' className='w-full h-2/3 p-4 bg-black text-white px-10'>
      <div className='max-w-screen-lg mx-auto flex flex-col w-full h-1/2 mt-12 px-4'>
        <div>
          <h1 className='md:text-6xl text-3xl mb-8 text-green-400 font-bold pt-4'>Plumber → Coder</h1>
        </div>
        <div className='md:flex flex-row'>
          <p className='text-base md:w-1/2'>
          <p className='pb-1'>
          My name is Joey Caltabellotta and I am a recent graduate of an intensive engineering bootcamp through General Assembly. After years of working in the plumbing industry, I decided to make a change and pursue a career in coding.
          </p>
          <p className='pb-1'>
          <br />
          Now I am proud to call myself a frontend developer, utilizing my background in customer service and problem solving to collaborate with others and build awesome websites.
          </p>
          <br />
          <p>
          When I’m not coding, I enjoy going on day trips with my girlfriend and our puppy, Ravioli. You can also catch me on the golf course trying my hardest to not lose more than 10 golf balls.  
          </p>
          </p>
          <img src={Rav} alt='' className='mx-auto h-80 w-80'/>
        </div>
      </div>
    </div>
  )
}

export default About