import React from 'react'

export default function Experiences() {
  return (
    <div className='container mx-auto p-4 flex flex-col gap-2 lg:p-8 my-12 '>
    <div className='shadow-md rounded-md'>
    <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-semibold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
     <svg className='w-6 fill-[#01377d] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
     <p className='text-[#01377d] lg:text-2xl'>WORK EXPERIENCE</p>
     </div>

      <p className='text-left p-2 text-[#009dd1] ml-2'>
      Intern at Cylex company <br />
      Position: Front End Developer
     </p>

    </div>
    
 </div>
  )
}
