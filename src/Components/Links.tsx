import React from 'react'

export default function Links() {
  return (
    <div> 
    <div className='flex flex-col xl:flex-row justify-center items-center text-base font-semibold text-[#01377d] mt-4 '> 
    <div className='flex justify-center items-center gap-4'>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="#pinfo">PROFILE INFO</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="#experiencies">WORK EXPERIENCE</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="#skills">MY SKILLS</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="#education">EDUCATION</a>
    </div>
    <div className='flex justify-center items-center gap-4'>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="">PROJECTS</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="">VOLUNTEERING</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="">LANGUAGE</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="">HOBBIES</a>
    <a className='hover:text-[#009dd1] w-fit p-2 hover:bg-white hover:rounded-md' href="">CONTACT</a>
    </div>
    </div></div>
  )
}
