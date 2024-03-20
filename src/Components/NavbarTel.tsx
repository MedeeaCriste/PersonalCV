import React from 'react'
import HamburgerMenu from './HamburgerMenu.tsx'
export default function NavbarTel() {
  return (
    <div className="p-4 w-full lg:hidden bg-cover bg-[url('/public/assets/backgroud.jpg')] h-[120px]">
      <HamburgerMenu/>
      <div className='textanim flex justify-center items-center mt-10 gap-4 text-xl text-[#01377d]'>
      <img className='w-[100px] h-[100px] object-cover rounded-full' src="/assets/profilphoto.jpg" alt="" />
      <h1 className='animbg font-bold mt-[-25px]'>Criste Evelin-Medeea</h1>
      </div>
    </div>
  )
}
