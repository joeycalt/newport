// import React from 'react'
// import html from '../assets/html.png'
// import css from '../assets/css.png'
// import javascript from '../assets/javascript.png'
// import reactImg from '../assets/reactimg.png'
// import python from '../assets/python.png'
// import bootstrap from '../assets/bootstrap.png'
// import tailwind from '../assets/tailwind.png'
// import github from '../assets/github.png'

// const Experience = () => {

//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: 'HTML',
//       style: 'shadow-orange-500'
//     },
//     {
//       id: 2,
//       src: css,
//       title: 'CSS',
//       style: 'shadow-blue-500'
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: 'JavaScript',
//       style: 'shadow-yellow-500'
//     },
//     {
//       id: 4,
//       src: reactImg,
//       title: 'React',
//       style: 'shadow-blue-600'
//     },
//     {
//       id: 5,
//       src: python,
//       title: 'Python',
//       style: 'shadow-yellow-400'
//     },
//     {
//       id: 6,
//       src: bootstrap,
//       title: 'Bootstrap',
//       style: 'shadow-purple-500'
//     },
//     {
//       id: 7,
//       src: tailwind,
//       title: 'Tailwind',
//       style: 'shadow-sky-400'
//     },
//     {
//       id: 8,
//       src: github,
//       title: 'Github',
//       style: 'shadow-gray-400'
//     },
//   ]

//   return (
//     <div name='Experience' className='bg-black w-full h-screen p-4 px-10 py-20'>
//       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify center w-full h-full text-white'>
//         <div>
//           <p className='md:text-6xl text-3xl font-bold inline text-green-400'>Experience</p>
//           <p className='sm:py-3 text-base'>Technologies I enjoy working with.. to learn more check out my  
//           <a href='/Joey-Caltabellotta-Resume-2024.pdf'
//           download 
//           target='_blank'
//           rel="noreferrer"
//           className='text-green-400 font-bold'> Resume</a></p>
//         </div>
//         <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-4 sm:px-0'>

//       {
//         techs.map(({id, src, title, style}) => (
//           <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
//             <img src={src} alt='' className='w-20 mx-auto'/>
//             <p className='mt-4'>{title}</p>
//           </div>
//          ))
//       }    

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Experience
