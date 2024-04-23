import React from 'react'
import Hobby from './Hobby.tsx'
export default function Hobbies() {
  return (
    <div id='hobbies' className=' container border-[2px] shadow-md rounded-md mx-auto p-4 lg:p-8'>
    <div className='flex justify-start items-center p-2 ml-2 gap-2 text-lg font-bold py-2 border-b-[2px] border-[#1e1e1e] w-[300px] lg:w-[500px] '>
    <svg className='w-6 fill-[#01377d] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
    <p className='text-[#01377d] lg:text-2xl'>Hobbies</p>
    </div>
    <div className='flex flex-col lg:flex-row lg:justify-between  justify-center items-center gap-2 mt-4'>
    <Hobby title="Volleyball-API team [2016-2019]" img={"assets/voleyball.png"}/>
     <Hobby title="Ping-pong" img={"assets/ping-pong.png"}/>
    <Hobby title="Photography" img={"assets/photo.png "}/>
    </div>
     
    </div>
  )
}
