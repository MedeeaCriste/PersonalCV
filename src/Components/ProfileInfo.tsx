import React from 'react'

export default function ProfileInfo() {
  return (
    <div id='pinfo' className='container shadow-md border-[2px] rounded-md mx-auto p-4 flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-2 lg:p-8 mt-12 '>
      <div  >
       <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-bold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
        <svg className='w-6 fill-[#01377d] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
        <p className='text-[#01377d] lg:text-2xl'>PROFILE INFO</p>
        </div>

         <p className='text-left p-2 text-[#1e1e1e] font-semibold ml-2'>As a computer science student, I'm eager to expand my
        knowledge and advance my personal growth. I'm a proactive
        and enthusiastic individual with a knack for collaborating
        with others as well as working independently. My ultimate
        objective is to achieve great success in the field and hone
        my skills to the fullest extent possible.
        </p>
      </div>
       
          <img className='w-[200px] p-4 object-cover' src="/assets/info.png" alt="" />
       
    </div>
  )
}
