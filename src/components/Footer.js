import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
    const location = useLocation();
  
    return (
      <footer>
        {location.pathname === '/' &&  <div className='pl-[35px] pt-[55px] pb-[28px] md:px-[64px] md:pt-[244px] bg-[#202020] text-white text-[10px] font-[400]'>
            <div className='font-silkscreen text-[28px] md:text-[106px]'>Joey Caltabellotta</div>
        </div>}
        {location.pathname === '/about' &&  <div className='mt-10 py-[10px] bg-gray-100 text-black pl-[60px] text-[12px] font-[400]'>© 2024 Joey Caltabellotta. All rights reserved.</div>}
        {location.pathname === '/contact' &&  <div className='mt-[-35px] py-[10px] bg-gray-100 text-black pl-[60px] text-[12px] font-[400]'>© 2024 Joey Caltabellotta. All rights reserved.</div>}
        {location.pathname === '/mybudget' &&  <div className='mt-[-35px] py-[10px] bg-gray-100 text-black pl-[60px] text-[12px] font-[400]'>© 2024 Joey Caltabellotta. All rights reserved.</div>}
        {location.pathname === '/recipebox' &&  <div className='mt-[-35px] py-[10px] bg-gray-100 text-black pl-[60px] text-[12px] font-[400]'>© 2024 Joey Caltabellotta. All rights reserved.</div>}
        {location.pathname === '/goodvibes' &&  <div className='mt-[-35px] py-[10px] bg-gray-100 text-black pl-[60px] text-[12px] font-[400]'>© 2024 Joey Caltabellotta. All rights reserved.</div>}
      </footer>
    )
  };

  export default Footer;
  