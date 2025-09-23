import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-9 w-full bg-[#596676]'>
     <div className='flex pl-6 text-sm gap-1 font-semibold text-[#b8c0c6] pt-2'>
       <p>2025</p>
      <p className='text-sm pt-1'><FaRegCopyright /></p>
      <p className='text-[#efefef]'>Namo Gange Wellness india Pvt. Ltd</p>
     </div>
    </div>
  )
}

export default Footer
