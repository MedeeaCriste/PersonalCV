import React, { useState, useEffect } from 'react';
import Links from './Links.tsx';
const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Aici se schimba 200 cu valoarea dorită
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className='w-full bg-[#97e7f5] fixed mx-auto p-4 hidden lg:block '>
            <Links/> 
        </div>
      )}
    </div>
  );
};

export default ScrollNavbar;
