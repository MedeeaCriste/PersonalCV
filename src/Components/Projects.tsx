import React from 'react'

export default function Projects() {
    return (
        <div id='projects' className='container border-[2px] shadow-md rounded-md mx-auto p-4 flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-2 lg:p-8 mt-12 '>
        <div>
        <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-bold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
        <svg className='w-6 fill-[#01377d] 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
         <p className='text-[#01377d] lg:text-2xl'>PROJECTS</p>
         </div>
          <div className='text-left p-2 text-[#1e1e1e] font-semibold ml-2'>
          <p>
          Some of my projects built using React, NextJS, Svelte,
          HTML, CSS, Tailwind CSS and JavaScript:
         </p> 
         <div className='flex items-center gap-2'>
         <svg className='w-5 fill-[#01377d] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            <a className='text-[#009dd1]' href="https://github.com/MedeeaCriste?tab=repositories">Github</a>
         </div>
         <div className='flex gap-2 mt-2'>
         <a className='bg-[#01377d] text-white p-2 rounded-sm w-fit' href="https://ardtoradea.ro">ARDT Oradea</a>
         <a className='bg-[#01377d] text-white p-2 rounded-sm w-fit' href="https://top-profi.eu">Top Profi</a>
         <a className='bg-[#01377d] text-white p-2 rounded-sm w-fit' href="https://guid-travel-app.vercel.app">Guid Travel</a>
         <a className='bg-[#01377d] text-white p-2 rounded-sm w-fit' href="https://bddlogspeed.ro">BDL Logspeed</a>
         <a className='bg-[#01377d] text-white p-2 rounded-sm w-fit' href="https://afromed-ronicicul.web.app">That Ronicic</a>
         </div>
        
          </div>
        </div>
         
    
          <div className='flex float-end'>
            <img className='w-[230px] p-4 object-cover' src="/assets/exp.png" alt="" />
          </div>
        
     </div>
      )
}
