import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({ theme, toggleTheme }) => {
  const [dropdown, setDropdown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: 1, link: 'About', path: '/about' },
    { id: 2, link: 'LinkedIn', path: 'https://www.linkedin.com/in/joey-caltabellotta/', target: '_blank', rel: 'noopener noreferrer' },
  ];

  // Scroll behavior for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= scrollY);
      setScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const scrollToProjects = () => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to home if not on it
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Delay scroll to ensure page loads
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
    className={`fixed top-0 w-full px-4 py-4 bg-white flex flex-col md:flex-row justify-between items-center transition-transform duration-300 ${
      showNav ? 'translate-y-0' : '-translate-y-full'
    } z-50`}
  >
    <h1 className="text-blue-700 font-normal text-[14px] font-work-sans text-center mb-2 md:mb-0 md:text-left">
      <Link to="/">joey=&gt;calt.</Link>
    </h1>
  
    <ul className="flex flex-row text-[16px] font-light space-x-4">
      <li
        className="px-2 cursor-pointer hover:scale-110 hover:text-blue-700 transition duration-100"
        onClick={scrollToProjects}
      >
        Projects
      </li>
      {links.map(({ id, link, path, target, rel }) => (
        <li
          key={id}
          className="pl-[92px] md:px-2 cursor-pointer capitalize hover:scale-110 hover:text-blue-700 transition duration-100"
        >
          <Link to={path} target={target} rel={rel}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default NavBar;
