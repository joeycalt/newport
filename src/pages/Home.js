import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Budget from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/myBudget-Thumb.png';
import Beat from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/BeatTheOdds-Thumb.png';
import Recipe from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/RecipeBox-Thumb.png';
import Main from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/JOEY-HOME.jpg';
import Arrow from '/Users/joeycaltabellotta/Desktop/newportfolio/src/assets/Group 1.png';
import '../index.css';
import {motion, useInView} from "framer-motion";

const Home = () => {
    const [hoverText, setHoverText] = useState({ top: 0, left: 0, opacity: 0 });
    const projectsRef = useRef(null);
    const [hasProjectsAnimated, setHasProjectsAnimated] = useState(false);
    const isInView = useInView(projectsRef, { once: true, amount: 0.25 });

    const projects = [
        {
            id: 1,
            src: Budget,
            title: 'MyBudget',
            skills: 'Python',
            skills2: 'Django',
            skills3: 'SQL',
            path: '/mybudget'
        },
        {
            id: 2,
            src: Beat,
            title: 'Beat the Odds',
            skills: 'JavaScript',
            skills2: 'React',
            skills3: 'API',
            path: '/goodvibes'
        },
        {
            id: 3,
            src: Recipe,
            title: 'RecipeBox',
            skills: 'React',
            skills2: 'Bootstrap',
            skills3: 'API',
            path: '/recipebox'
        },
    ];

    const handleMouseMove = (e) => {
        const hoverTextWidth = 130;
        const hoverTextHeight = 350;

        setHoverText({
            top: e.clientY - hoverTextHeight / 2 + 'px', // Center vertically
            left: e.clientX - hoverTextWidth / 2 + 'px', // Center horizontally
            opacity: 1 // Show hover text on mouse move
        });
    };

    const handleMouseLeave = () => {
        setHoverText((prev) => ({ ...prev, opacity: 0 })); // Hide hover text on mouse leave
    };

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
            delay: .3,
            duration: .2,
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
            stiffness: 80,
            damping: 40
          }
        }
      };    

      const cardVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeInOut"
            }
        }
    };

      useEffect(() => {
        if (isInView && !hasProjectsAnimated) {
            setHasProjectsAnimated(true);
        }
    }, [isInView, hasProjectsAnimated]);

    
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className='h-[720px] pt-[93px] md:pt-[165px] hero md:h-[800px]'>
                <div className="md:flex-row flex justify-center h-[400px] text-black relative">
                    <Link to='/about' onMouseLeave={handleMouseLeave}>
                        <motion.div
                             variants={imageVariants}
                             initial="initial"
                             animate="animate"
                        >
                            <img
                                src={Main}
                                alt="Main"
                                className="h-[400px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                onMouseMove={handleMouseMove}
                            />
                        </motion.div>
                        <div
                            className="absolute bg-blue-700 py-2 px-4 text-2xl font-light text-white rounded-full transition-opacity duration-500"
                            style={{
                                top: hoverText.top,
                                left: hoverText.left,
                                opacity: hoverText.opacity,
                                pointerEvents: 'none'
                            }}
                        >
                            About me
                        </div>
                    </Link>
                </div>
                <motion.p
                    className="flex flex-col text-center text-[30px] pt-[21px] font-silkscreen md:text-[113px] md:pt-4 md:flex-row md:justify-center text-[#202020]"
                    variants={introVariants}
                             initial="initial"
                             animate="animate"
                >
                    <span>Joey</span>
                    <span>Caltabellotta</span>
                </motion.p>
                <Link
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="pt-[47px] animate-bounce text-[30px] flex justify-center md:pt-[0px]"
                    >
                        ↓
                    </motion.div>
                </Link>
            </div>

            {/* Projects Section */}
            <section id="projects" ref={projectsRef} className="h-[350px] pt-[70px] md:h-[800px] bg-[#202020] w-full md:pt-[100px] pr-[20px] horizontal-scroll-container" data-scroll-section data-scroll>
                <div className='block w-[450px] px-[32px] md:flex md:flex-row md:w-[950px]'>
            <h1 className="text-[60px] md:pb-[30px] md:text-[90px]  text-white font-light md:pl-[64px] md:pr-[64px]">
                                <motion.span 
                                    initial={{ x: '-100%', opacity: 0 }}
                                    animate={hasProjectsAnimated ? { x: 0, opacity: 1 } : {}} // Ensure this also only animates once
                                    transition={{ duration: 1, delay: .2, ease: "easeOut" }}
                                >
                                    Projects
                                    <motion.h4 
                                        initial={{ x: '-100%', opacity: 0 }}
                                        animate={hasProjectsAnimated ? { x: 0, opacity: 1 } : {}} // Same for subheading
                                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                        className="text-[14px] md:text-[16px] text-white font-light"
                                    >
                                        Check out a few pieces of work developed by me
                                    </motion.h4>
                                </motion.span>
                            </h1>
                <div className="flex items-start w-full">
                    <motion.div
                        className="flex flex-col md:flex md:flex-row overflow-x-auto space-x-[50px] pb-[40px] scrollbar-hide"
                        variants={sectionVariants}
                        initial="initial"
                        animate={hasProjectsAnimated ? "animate" : "initial"} // Here's the key change
                    >
                        <div className="flex flex-col md:flex md:flex-row space-x-[50px] pb-[40px] projects-wrapper" data-scroll data-scroll-direction="horizontal">
                            
                            <div className="overflow pt-[34px] md:w-[950px]  space-x-[50px] scrollbar-hide md:overflow-x-visible" data-scroll data-scroll-direction="horizontal">
                            {projects.map(({ id, src, title, skills, skills2, skills3, path }) => (
                                <Link to={path} key={id}>
                                    <div className="w-[305px] h-[405px] flex-none md:w-[515px] md:h-[560px] bg-[#393939] rounded-lg overflow-hidden">
                                        <motion.span 
                                            initial={{ x: '100%', opacity: 0 }}
                                            animate={hasProjectsAnimated ? { x: 0, opacity: 1 } : {}}
                                            transition={{ duration: 1, delay: .2, ease: "easeOut" }}
                                        >
                                            <motion.div 
                                            key={id}
                                            variants={cardVariants}
                                            whileHover="hover"
                                            >
                                            <img src={src} alt={title} className="object-cover w-[305px] h-[239px] md:w-[515px] md:h-[415px]" />
                                            <div className="pl-[20px] md:p-[20px]">
                                                <p className="pt-[25px] text-[30px] md:text-[40px] md:pt-[0px] font-normal mb-2 text-white">{title}</p>
                                                <hr className="border-gray-500 pt-[16px] md:pt-[0px]" />
                                                <div className='pt-[16px] md:pt-[0px] pb-[30px] md:pb-[0px]'>
                                                <span className="text-white font-silkscreen font-normal text-[16px] px-[4px]">{skills}•</span>
                                                <span className="text-white font-silkscreen font-normal text-[16px] px-[4px]">{skills2}•</span>
                                                <span className="text-white font-silkscreen font-normal text-[16px] px-[4px]">{skills3}</span>
                                                </div>
                                            </div>
                                            </motion.div>
                                        </motion.span>
                                    </div>
                                </Link>
                            ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                </div>
            </section>
            {/* Footer Section */}
            <section>
                <div className="bg-[#202020]">
                <motion.div
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <h1 className="font-silkscreen text-[26px] text-white pl-[64px] md:pt-[80px]">
                        <span className="text-[#4FE200]">•</span> Open to work
                    </h1>
                    <Link to='/contact'>
                        <h1 className="text-[50px] md:text-[90px] text-white pl-[64px] pt-[16px] flex justify-between items-center">
                            Let's chat
                            <img className="text-white pr-[64px]" src={Arrow} alt="" />
                        </h1>
                    </Link>
               
                <div className="pt-[75px] bg-[#202020] px-[64px] font-thin">
                <hr />
            </div>
            <div className="flex justify-between items-center bg-[#202020] px-[64px] pt-[10px] text-white text-[20px]">
                <Link onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                    Projects
                </Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            </motion.div> 
            </div>
            </section>
            </div>
    );
};

export default Home;