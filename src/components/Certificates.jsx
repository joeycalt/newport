import React from 'react'
import Udemy from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/udemy.jpg'
import GA from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/GA.png'
import Webflow from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/webflow.png'

const Certificates = () => {

    const certificates = [
        {
            id: 1,
            src: GA,
        },
        {
            id: 2,
            src: Udemy,
        },
        {
            id: 3,
            src: Webflow,
        }
    ]


  return (
    <div name= 'Certificates' className='bg-black w-full text-white md:h-screen p-4 px-5'>
        <div className='max-w-screen-lg sm:p-4 p-9 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pt-10 sm:mt-4'>
            <p className='md:text-6xl text-3xl font-bold inline text-green-400'>
                Certificates
            </p>
            <p className='py-3 text-base pb-10'>
                Check out certificates I've earned!
            </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
        {
            certificates.map(({id, src}) => (
            <div key={id}>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 h-60 w-190'/>
            </div>
                    
            ))
        }
        </div>
    </div>
</div>
  )
}

export default Certificates