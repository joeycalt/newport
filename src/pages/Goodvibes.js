import React from 'react';
import BTOImg from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/beattheodds.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Arrow from '../assets/Group 2.png';

const Goodvibes = () => {

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

  return (
    <div className=""> 
    <motion.div className='pl-[32px] pt-[100px] md:pt-20 md:pl-20 '
         variants={introVariants}
         initial="initial"
         animate="animate"
        >
            <h1 className="text-[40px] font-extralight">Beat the Odds</h1>
        </motion.div>
        <motion.div className='pl-20 pr-20 pt-24 flex justify-center'
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        >
        <img src={BTOImg} alt='' className='w-[311px] h-[400px] md:w-[1322px] md:h-[541px] hidden md:block' />
        <img src={BTOImg} alt='' className='w-[311px] h-[400px] md:w-[1322px] md:h-[541px] block md:hidden' />
        
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
                <p>Built a dynamic sports odds translator application to give sports enthusiasts a competitive edge. This web app leverages a robust API to fetch live sports betting odds, delivering real-time data to users. The front-end, powered by React, ensures a seamless and interactive experience, while HTML, CSS, and Bootstrap create a sleek, responsive design. From fetching odds to rendering intuitive visuals, this app equips users with the tools to make informed betting decisions. Perfect for sports lovers looking to stay ahead of the game.</p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>My Role</h1>
                <p>I led the end-to-end development of Beat the Odds, collaborating closely with a UX/UI designer to shape its vision and execution. My role spanned front-end development, API integration for real-time odds, and rigorous QA testing to ensure a seamless user experience. Leveraging React, HTML, CSS, and Bootstrap, I crafted a responsive, user-centric interface that empowers sports enthusiasts with actionable betting insights. This project honed my skills in front-end coding, API-driven development, and delivering intuitive, high-quality user experiences.</p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Highlights</h1>
                <p>
                  <li><span className='font-bold'>Live API calls</span> - Gives user information regarding sports scores and betting lines all around the league in seconds upon visiting page.</li>
                  <li><span className='font-bold'>Responsive design</span> (WIP) - Optimizing for desktop and mobile</li>
                  </p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Outcome</h1>
                <p>A classroom project ignited my drive for Beat the Odds, a sports betting app. Working with a UX/UI designer, I refined its sleek design and added features in my spare time. I built a responsive interface with real-time API odds, ensuring a smooth user experience through diligent QA. This project showcases my knack for creating engaging, data-driven tools for sports fans.</p>
            </div>
            </div>
            <div className='pl-[32px] pt-[50px] md:pt-[0px] md:pl-[60px] md:pr-20'>
                <h3 className='text-[18px] md:text-[24px] pb-[58px]'>Skills</h3>
                <div className="flex flex-col text-[30px] md:text-[40px]">
  <span>React</span>
  <span>API</span>
  <span>HTML</span>
  <span>CSS</span>
  <span>Bootstrap</span>
</div>
            
        <div className='pt-20'>
          <a href='https://goodvibesbetting.netlify.app' target="_blank" rel="noopener noreferrer">
            <button className='px-6 py-3 my-6 rounded-full border border-blue-700 bg-white text-[18px] text-blue-700 font-normal hover:bg-blue-700 hover:text-white hover:duration-500 '>View Live Site</button>
            </a>
        </div>
        
        </div>
            </motion.div>
            <div>
            <Link to='/recipebox'>
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

export default Goodvibes;