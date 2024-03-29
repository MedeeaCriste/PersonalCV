import React from 'react'

export default function Volunteering() {
    return (
        <div id='experiences' className='container shadow-md rounded-md mx-auto p-4 flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-2 lg:p-8 mt-12 '>
        <div>
        <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-semibold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
         <svg className='w-6 fill-[#01377d] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>
         <p className='text-[#01377d] lg:text-2xl'>VOLUNTEERING</p>
         </div>
    
          <p className='text-left p-2 text-[#009dd1] ml-2'>
          ASIO volunteer <br />
        'Association of engineers from Oradea' <br /><br />
         ARDT volunteer <br />
        'Oradea Youth Responsabily and Development Assocition' <br />
         IT Departament

         </p>
         </div>
    
            <img className='w-[200px] p-4' src="/assets/volunt.png" alt="" />
        
     </div>
      )
}
