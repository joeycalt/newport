import React from 'react';
import BudgetImgmobile from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/mybudgetmobile.png';
import BudgetImg from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/image 2.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Arrow from '../assets/Group 2.png';

const Budget = () => {

    const sectionVariants = {
        initial: { opacity: 0, y: 50, scale: 0.9 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
            when: "beforeChildren",
          }
        }
      };
    
      const introVariants = {
        initial: { opacity: 0, x: -100 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 1,
            duration: 1,
            ease: "easeOut"
          }
        }
      };
    
      const imageVariants = {
        initial: { scale: 0.5, opacity: 0 },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }
      };

  return (
    <div className=""> 
    <motion.div className='pl-[32px] pt-[100px] md:pt-20 md:pl-20 '
         variants={introVariants}
         initial="initial"
         animate="animate"
        >
            <h1 className="text-[40px] font-extralight">My Budget</h1>
        </motion.div>
        <motion.div className='pl-20 pr-20 pt-24 flex justify-center'
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        >
        <img src={BudgetImg} alt='' className='w-[311px] h-[400px] md:w-[1322px] md:h-[541px] hidden md:block' />
        <img src={BudgetImgmobile} alt='' className='w-[311px] h-[400px] md:w-[1322px] md:h-[541px] block md:hidden' />
        
        </motion.div>  
       
        <motion.div className='md:flex md:columns-2 pt-40 text-[18px]'
         variants={introVariants}
         initial="initial"
         whileInView="animate"
         viewport={{ once: true }}
        >
          <div>
            <div className='pl-[32px] md:pl-20 pr-20 md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Overview</h1>
                <p>myBudget is a modern personal finance tool designed to help users take control of their money through intuitive budgeting, goal tracking, and real-time insights. I created this app to simplify money management for everyday users, combining clean design with practical features that empower financial confidence.</p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>My Role</h1>
                <p>I worked on the end-to-end development of myBudget, working with a UX/UI designer on the vision and execution, including QA, front-end and back-end coding, and integration of budgeting logic and data visualization. This project gave me the opportunity to apply full-stack skills while focusing on user experience and performance optimization.</p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Highlights</h1>
                <p>
                  <li><span className='font-bold'>Animated counter</span> - Draws user attention upon landing and makes the app relatable</li>
                  <li><span className='font-bold'>Budgeting logic</span> - Features built-in budgeting logic that calculates remaining budgets</li>
                  <li><span className='font-bold'>Responsive design</span> (WIP) - Optimizing for desktop and mobile</li>
                  </p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Outcome</h1>
                <p>What started as a school assignment became a passion project. Influenced by many financial platforms out in the world today, I have been working with the designer to improve overall look and feel and add additional features in my spare time.</p>
            </div>
            </div>
            <div className='pl-[32px] md:pl-[32px] pt-[50px] md:pt-[0px] md:pl-[60px] md:pr-20'>
                <h3 className='text-[18px] md:text-[24px] pb-[58px]'>Skills</h3>
                <div className="flex flex-col text-[30px] md:text-[40px]">
  <span>Python</span>
  <span>Django</span>
  <span>JavaScript</span>
  <span>CSS</span>
  <span>Bootstrap</span>
</div>
            
        <div className='pt-20'>
          <a href='https://mybudgetapp.herokuapp.com/' target="_blank" rel="noopener noreferrer">
            <button className='px-6 py-3 my-6 rounded-full border border-blue-700 bg-white text-[18px] text-blue-700 font-normal hover:bg-blue-700 hover:text-white hover:duration-500 '>View Live Site</button>
            </a>
        </div>
        
        </div>
            </motion.div>
            <div>
            <Link to='/goodvibes'>
                        <h1 className="text-[50px] md:text-[90px] text-black pl-[32px] md:pl-[55px] pt-[100px] flex justify-between items-center">
                          <div className='flex flex-col md:flex-row md:space-x-6'>
                            <span>Next</span>
                            <span>project</span>
                            </div>
                            <img className="text-black pr-[32px] md:pr-[84px]" src={Arrow} alt="" />
                        </h1>
                    </Link>
            </div>
            <hr className='ml-[55px] mr-[55px] mt-[73px] pb-[46px]'/>
            <div className="flex justify-between items-center px-[55px] pt-[10px] text-black text-[20px]">
                            <Link onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                Projects
                            </Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
        <div className='flex flex-col'>
        <div className='pt-[100px] pl-[64px]'>
        </div>
        </div>
    </div>
  );
};

export default Budget;