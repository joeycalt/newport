import React from 'react';
import Pic1 from '../assets/IMG_1804.png';
import Pic2 from '../assets/IMG_3448.png';
import Pic3 from '../assets/IMG_2322.png';
import Udemy from '../assets/udemy.jpg'
import GA from '../assets/GA.png'
import Webflow from '../assets/webflow.png'
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Bootstrap', 'Tailwind', 
    'Angular', 'Node.js', 'Express', 'MongoDB', 'SQL', 'VS Code', 
    'PostgreSQL', 'Webflow'
  ];

  const certificates = [
    {
      id: 1,
      title: 'Software Engineering Immersive Remote',
      src: GA,
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures Masterclass',
      src: Udemy,
    },
    {
      id: 3,
      title: 'Webflow 101 Certification Exam',
      src: Webflow,
    }
  ];

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
    <div className=" min-h-screen text-black">
      {/* Introduction Section */}
      <section>
      <motion.div 
        variants={introVariants}
        initial="initial"
        animate="animate"
        className='pl-[32px] pt-40 md:pl-20'
      >
        <h1 className='text-[32px] font-extralight md:text-[60px] tracking-wider'>For 5+ years, Plumbing was my day job.</h1>
        <h3 className='text-[32px] text-blue-700 font-normal md:text-[60px]'>Now I'm a full-time, dedicated coder.</h3>
      </motion.div>

      {/* Images Section with Parallax Effect */}
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className='flex flex-col items-center px-[80px] py-[30px] md:flex md:flex-row md:px-20 md:gap-10 md:py-20 bg-fixed bg-cover bg-center' 
      >
        {[Pic1, Pic2, Pic3].map((pic, index) => (
          <motion.img 
            key={index}
            src={pic}
            alt=''
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className='w-[214px] h-[276px] md:w-[480px] md:h-[600px] mt-20 border-4 border-white rounded-xl'
          />
        ))}
      </motion.div>
      </section>

      {/* About Section */}
      <section>
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className='px-[32px] md:pl-20 md:pt-20 md:w-1/2 md:p-10'
      >
         <p className='text-[16px] md:text-[20px] font-[400] pt-10'>
          Hello! I'm Joey, and I've recently embarked on a new journey as a Frontend Developer. After experimenting with coding in my spare time, I decided to deepen my skills through General Assembly's 3-month Software Engineering bootcamp. There, I not only covered backend but truly fell in love with frontend development. There's something special about seeing the direct outcome of your code come to life.

          <p className='text-[16px] md:text-[20px] font-[400] pt-10'>Since graduating, I've been dedicating my time to personal projects and building this portfolio. </p>

          <p className='text-[16px] md:text-[20px] font-[400] pt-10'>In my free time, I enjoy unwinding with my fiancée and our dog, Ravioli. We love exploring the East End, taking leisurely walks, and when we're not out and about, I'm either on the golf course, in the gym, or diving into some video games.</p>
          <p className='text-[16px] md:text-[20px] font-[400] pt-10'>Let's connect and create something amazing together!</p>
        </p>
      </motion.div>
      </section>

      {/* Skills Section */}
      <section>
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=''
      >
        <h2 className='pl-[32px] text-[20px] md:text-[36px] md:pl-20 pt-20 pb-10 font-bold'>Skills</h2>
        <div className='text-[26px] pl-[32px] block md:grid md:grid-cols-3 md:text-[30px] md:pl-20'>
          {skills.map((skill, index) => (
            <motion.p 
              key={index} 
              className=''
            >
              {skill}
            </motion.p>
          ))}
        </div>
      </motion.div>
      </section>

      {/* Certificates Section */}
      <section>
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=''
      >
        <h2 className='text-[20px] md:text-[36px] pl-[32px] md:pl-20 pt-20 pb-10 font-bold text-black'>Certificates</h2>
        <div className='text-[16px] pl-[32px] md:text-[24px] md:pl-20'>
          {certificates.map(({id, src, title}) => (
            <motion.div 
              key={id} 
              className='hover:text-blue-500 py-2 underline'
            >
              <a href={src} target="_blank" rel="noopener noreferrer">{title}</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </section>
    </div>
  );
};

export default About;