import React, { useState, useEffect } from 'react';
import Links from './Links.tsx';
const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="w-full bg-[url('/public/assets/backgroud.jpg')] bg-cover z-50 fixed top-0 mx-auto p-2 pb-6 hidden lg:block ">
            <Links/> 
        </div>
      )}
    </div>
  );
};

export default ScrollNavbar;
