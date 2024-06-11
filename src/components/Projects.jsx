import React from 'react'
import Budget from '../assets/mybudget.png'
import GoodVibes from '../assets/goodvibes.png'
import Recipe from '../assets/recipe.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: Budget,
            title: 'All those trips to Starbucks and Target can add up. Take control with myBudget.',
            skills: 'Django | SQL | Python | Bootstrap',
            live: 'https://mybudgetapp.herokuapp.com/',
            code: 'https://github.com/joeycalt/myBudget'
        },
        {
            id: 2,
            src: GoodVibes,
            title: 'The simple, efficient way to compare sports betting odds across Sportsbooks.',
            skills: 'JavaScript | API | React | Bootstrap',
            live: 'https://goodvibesbetting.netlify.app/',
            code: 'https://github.com/joeycalt/GoodVibes-Betting'
        },
        {
            id: 3,
            src: Recipe,
            title: 'Tired of the same old meals? Mix it up with RecipeBOX!',
            skills: 'React | Bootstrap | API',
            live: 'https://randomrecipebox.netlify.app/',
            code: 'https://github.com/joeycalt/RecipeBox'
        },
    ]


  return (
    <div name= 'Projects' className='bg-black w-full text-white md:h-screen p-6 px-5'>
        <div className='max-w-screen-lg sm:p-4 p-9 mx-auto flex flex-col justify-center w-110 h-90'>
            <div className='pt-5 sm:mt-4'>
            <p className='md:text-6xl text-3xl font-bold inline text-green-400'>
                Projects
            </p>
            <p className='py-3 text-xl pb-10'>
                Check out some of my work!
            </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 px-8 sm:px-0 gap-10'>
        {
            projects.map(({id, src, title, skills, live, code}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-100 h-100'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 w-100 h-100'/> <p className='mt-4 text-center text-lg'>{title}</p>
                <div className='flex items-center justify-center'>
                    <a href={live}
                    target='_blank'
                    rel='noreferrer'>
                <button className='w-1/2 m-2 px-4 duration-200 hover:scale-105 text-green-400 text-xl'>
                        Live
                    </button>
                    </a>
                    <a href={code}
                    target='_blank'
                    rel='noreferrer'>
                    <button className='w-1/2 m-2 px-4 pt-1/2 duration-200 hover:scale-105 text-green-400 text-xl'>
                        Code
                    </button>
                    </a>
                </div>
            </div>
                    
            ))
        }
        </div>
    </div>
</div>
  )
}

export default Projects