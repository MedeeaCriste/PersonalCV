import React from 'react'

export default function Skills() {
    return (
        <div id='skills' className='container shadow-md rounded-md mx-auto p-4 flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-2 lg:p-8 mt-12 '>
        <div>
        <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-semibold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
         <svg className='w-6 fill-[#01377d] 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
         <p className='text-[#01377d] lg:text-2xl'>MY SKILLS & EXPERTISE</p>
         </div>
    
          <p className='text-left p-2 text-[#009dd1] ml-2'>
          React, <br />
          Html, <br />
          CSS, Javascript <br />
          Tailwind CSS <br />
          Web Design (Figma) 
         </p>
         </div>
    
            <img className='w-[200px] p-4 object-cover' src="/assets/frontend.png" alt="" />
        
     </div>
      )
}
