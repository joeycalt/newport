import React from 'react'
import Rav from '/Users/joeycaltabellotta/newportfolio/src/assets/qVUov4.Joey-Calt-About.png'

const About = () => {
  return (
    <div name='About' className='w-full h-screen p-4 bg-black text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify center w-full h-full mt-12 px-6'>
        <div>
          <h1 className='text-4xl mb-8 text-green-400 font-bold'>Plumber → Coder</h1>
        </div>
        <div>
        <div>
          <p>
          My name is Joey Caltabellotta and I am a recent graduate of an intensive engineering bootcamp through General Assembly. After years of working in the plumbing industry, I decided to make a change and pursue a career in coding.
          </p>
          <br />
        </div>
          <p>
          Now I am proud to call myself a frontend developer, utilizing my background in customer service and problem solving to collaborate with others and build awesome websites.
          </p>
        <br />
          <p>
          When I’m not coding, I enjoy going on day trips with my girlfriend and our puppy, Ravioli. You can also catch me on the golf course trying my hardest to not lose more than 10 golf balls.
          </p>
          </div>
          <div className='pt-5'>
            <img src={Rav} alt='' className='sm: h-80 w-80 mx-auto'/>
          </div>
      </div>
    </div>
  )
}

export default About