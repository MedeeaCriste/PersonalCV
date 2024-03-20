import React from 'react'
import Links from './Links.tsx'
export default function NavbarDsk() {
  return (
    <div className="hidden p-8 lg:block bg-cover bg-[url('/public/assets/backgroud.jpg')]">
       <div className='flex textanim flex-col justify-center items-center text-2xl text-[#01377d]'>
       <img className='w-[100px] h-[100px] object-cover rounded-full shadow-md' src="/assets/profilphoto.jpg" alt="" />
      <h1 className='font-bold'>Criste Evelin-Medeea</h1>
       </div>
       <div className='animlinks'>
       <Links/>

       </div>
       
    </div>
  )
}
