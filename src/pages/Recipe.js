import React, {useEffect} from 'react';
import recipeImg from '../assets/recipe.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Arrow from '../assets/Group 2.png';

const Recipe = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-[40px] font-extralight">Recipe Box</h1>
        </motion.div>
        <motion.div className='pl-20 pr-20 pt-24 flex justify-center'
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        >
        <img src={recipeImg} alt='' className='w-[311px] h-[400px] md:w-[1322px] md:h-[541px] hidden md:block' />
        <img src={recipeImg} alt='' className='w-[311px] h-[400px] md:w-[1322px] md:h-[541px] block md:hidden' />
        
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
                <p>Recipe Box is a vibrant meal planning app crafted to spark culinary creativity with fresh, personalized recipe ideas. Inspired by social media algorithms, I built this app to simplify meal discovery, using API fetch calls to deliver diverse recipes in real time. With a sleek, user-friendly design styled using CSS and Bootstrap, Recipe Box empowers users to explore new dishes effortlessly, blending functionality with visual appeal to inspire confident cooking..</p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>My Role</h1>
                <p>I worked on the front-end and developed a sleek, responsive interface using React, CSS, and Bootstrap, focusing on seamless API integration to provide diverse meal suggestions. Through diligent QA, I ensured a smooth, engaging user experience. Recipe Box highlights my front-end skills and passion for creating intuitive, data-driven apps that simplify meal discovery.</p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Highlights</h1>
                <p>
                  <li><span className='font-bold'>Random Shuffle</span> - Randomy selects a recipe in the API by a click of a button</li>
                  <li><span className='font-bold'>Recipe integration</span> - Links to YouTube videos and full recipe details for immersive cooking guidance.</li>
                  <li><span className='font-bold'>Responsive design</span> (WIP) - Optimizing for desktop and mobile</li>
                  </p>
            </div>
            <div className='pl-[32px] md:pl-20 pr-20 pt-[60px] md:w-[871px]'>
                <h1 className='text-[18px] md:text-[22px] pb-4'>Outcome</h1>
                <p>What began as a school assignment blossomed into Recipe Box, a lively meal planning app inspired by social media algorithms. In my spare time, I’ve enhanced its vibrant design and added features to streamline recipe discovery through real-time API calls. Built with JavaScript React, CSS, and Bootstrap, Recipe Box delivers an engaging, user-friendly experience, showcasing my dedication to crafting intuitive, API-driven apps for culinary enthusiasts.</p>
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
           <a href='https://randomrecipebox.netlify.app/' target="_blank" rel="noopener noreferrer">
            <button className='px-6 py-3 my-6 rounded-full border border-blue-700 bg-white text-[18px] text-blue-700 font-normal hover:bg-blue-700 hover:text-white hover:duration-500 '>View Live Site</button>
           </a>
           
        </div>
        
        </div>
            </motion.div>
            <div>
            <Link to='/mybudget'>
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

export default Recipe;