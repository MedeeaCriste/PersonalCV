import React from 'react'

export default function Education() {
    return (
        <div id='education' className='container shadow-md rounded-md mx-auto p-4 flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-2 lg:p-8 mt-12 '>
        <div>
        <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-semibold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
         <svg className='w-6 fill-[#01377d]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
         <p className='text-[#01377d] lg:text-2xl'>EDUCATION</p>
         </div>
    
          <p className='text-left p-2 text-[#009dd1] ml-2'>
            License: <br />
            University of Oradea, Faculty of Electrical Engineering and <br />
            Information Technology <br />
            [ 01/10/2020 –07/06/2024 ] <br />
            Baccalaureate: <br />
            Alexandru Papiu Ilarian Technical College <br />
            [ 09/15/2016 – 05/30/2019 ] 
         </p>
         </div>
    
          <div className='flex float-end'>
            <img className='w-[200px] p-4 object-cover ' src="/assets/education.png" alt="" />
          </div>
        
     </div>
      )
}
