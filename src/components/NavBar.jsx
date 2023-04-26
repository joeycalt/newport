import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Projects'
        },
        {
            id: 3,
            link: 'About'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4  text-green-400 bg-black fixed '> 
    <div>
        <h1 className='ml-5 text-green-400 font-bold text-xl'>
            Joey Calt
        </h1>
        </div>
        <ul className='hidden md:flex'>
            
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer cap font-medium hover:scale-125 duration-100'>
                 <Link to ={link} smooth duration={500}>{link}</Link>
            </li>
            ))}

        </ul>
        <div onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-5 z-10 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
            
            {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-green-400'>
        {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                 <Link 
                 onClick={() => setNav(!nav)}to={link} 
                 smooth duration={500}
                 >
                {link}
                </Link>
            </li>
            ))}
        </ul>



            )}

    </div>
  )
}

export default NavBar;