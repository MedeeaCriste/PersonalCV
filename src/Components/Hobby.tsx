import React from 'react'

export default function Hobby({img, title}:any) {
  return (
<div className='flex flex-col justify-center font-semibold lg:justify-between items-center'>
        <p className='text-left p-2 text-[#1e1e1e] ml-2 mb-4'>{title}
        </p>
        <img className='w-[150px]' src={img} alt="volleyball" />
     </div>  )
}
