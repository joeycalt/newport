import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const variants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
        stiffness: 60, 
        damping: 10, 
            duration: 1,
            staggerChildren: 0.1,
          },
        }
      };
  return (
    <motion.div name='Contact' className='w-full h-screen bg-white text-black p-4 px-10 text-center' variants={variants} initial="initial"
    animate="animate">
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='md:text-6xl text-3xl pt-5 font-bold inline text-black-400'>
            Thank you for stopping by.
          </p>
          <p className='py-3 text-2xl text-blue-700'>Let's connect!</p>
        </div>

        {/* Form Section */}
        <div className='flex justify-center'>
          <form
            action='https://getform.io/f/acbe2159-4c3b-495c-92f5-a1d58a68549e'
            method='POST'
            className='flex flex-col w-full md:w-2/3 lg:w-[600px] h-[500px]' 
          >
            {/* Name and Email Input */}
            <div className='flex flex-col md:flex-row md:space-x-4'>
              <input
                type='text'
                name='name'
                placeholder='Full name'
                className='p-4 text-lg bg-transparent border-2 bg-black rounded-md text-black focus:outline-none mb-4 md:mb-0 flex-1 h-[48px]'  
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='p-4 text-lg bg-transparent border-2 bg-black rounded-md text-black focus:outline-none flex-1 h-[48px]' 
              />
            </div>

            {/* Message Input */}
            <textarea
              type='text'
              name='message'
              placeholder='Message'
              rows='12'  
              className='p-4 text-lg bg-transparent border-2 bg-black rounded-md text-black focus:outline-none mt-4 h-[200px]'
            ></textarea>

            {/* Submit Button */}
            <button className='text-xl text-black bg-white border border-black px-6 py-3 my-6 rounded-full hover:bg-black hover:text-white hover:duration-500 cursor-pointer w-[200px] h-[50px] mx-auto'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
