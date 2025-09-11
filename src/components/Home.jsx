// import React from 'react'
// import Budget from '../assets/mybudget.png'
// import GoodVibes from '../assets/goodvibes.png'
// import Recipe from '../assets/recipe.png'

// const Home = () => {

//         const projects = [
//             {
//                 id: 1,
//                 src: Budget,
//                 title: 'All those trips to Starbucks and Target can add up. Take control with myBudget.',
//                 skills: 'Django | SQL | Python | Bootstrap',
//                 live: 'https://mybudgetapp.herokuapp.com/',
//                 code: 'https://github.com/joeycalt/myBudget'
//             },
//             {
//                 id: 2,
//                 src: GoodVibes,
//                 title: 'The simple, efficient way to compare sports betting odds across Sportsbooks.',
//                 skills: 'JavaScript | API | React | Bootstrap',
//                 live: 'https://goodvibesbetting.netlify.app/',
//                 code: 'https://github.com/joeycalt/GoodVibes-Betting'
//             },
//             {
//                 id: 3,
//                 src: Recipe,
//                 title: 'Tired of the same old meals? Mix it up with RecipeBOX!',
//                 skills: 'React | Bootstrap | API',
//                 live: 'https://randomrecipebox.netlify.app/',
//                 code: 'https://github.com/joeycalt/RecipeBox'
//             },
//         ]
//   return (
//     <div name='Home' className='h-screen w-full bg-gradient-to-b bg-white'>
        
//         <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-1/2 px-4 text-black'>
//   <div className='flex flex-col justify-center h-full px-5 md:w-1/2'>
//     <p className='text-4xl sm:text-4xl font-family'>Coder</p>
//   </div>

//   <div className='flex flex-col justify-center h-full px-5 md:w-100px'>
//     <h2 className='text-4xl sm:text-2xl font-family'>
//       Hi there! My name is Joey and I am a New York-based, junior Frontend Developer. I've recently changed career paths and found a love for coding.
//     </h2>
//     <p className='pt-7 sm:text-2xl'>Let's work together.</p>
//     <div
//       className='pt-7 text-blue-500 cursor-pointer sm:text-2xl'
//       onClick={(e) => {
//         window.location.href = 'mailto:caltabellottajoey@gmail.com';
//       }}
//     >
//       Get in touch
//     </div>
//   </div>
 
// </div> <div name= 'Projects' className='bg-white w-full text-black md:h-screen p-6 px-5'>
//         <div className='max-w-screen-lg sm:p-4 p-9 mx-auto flex flex-col justify-center w-110 h-110'>
//             <div className='pt-5 sm:mt-4'>
          
//         </div>

//         <div className='grid sm:grid-cols-2 md:grid-cols-3 px-8 sm:px-0 gap-10'>
//         {
//             projects.map(({id, src, title, skills, live, code}) => (
//             <div key={id} className='w-100 h-200'>
//                 <img src={src} alt='' className='w-100 h-200'/> <p className='mt-4 text-center text-lg'>{title}</p>
//                 <div className='flex items-center justify-center'>
//                     <a href={live}
//                     target='_blank'
//                     rel='noreferrer'>
//                 <button className='w-1/2 m-2 px-4 duration-200 hover:scale-105 text-green-400 text-xl'>
//                         Live
//                     </button>
//                     </a>
//                     <a href={code}
//                     target='_blank'
//                     rel='noreferrer'>
//                     <button className='w-1/2 m-2 px-4 pt-1/2 duration-200 hover:scale-105 text-green-400 text-xl'>
//                         Code
//                     </button>
//                     </a>
//                 </div>
//             </div>
                    
//             ))
//         }
//         </div>
//     </div>
// </div>
//     </div>
//   )
// }

// export default Home