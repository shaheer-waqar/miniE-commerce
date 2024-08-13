import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';




function Footer() {
  return (
    <div className='bg-zinc-900  py-5 text-white  px-5  w-full'>
      <div className='flex flex-col md:flex-row justify-around gap-10 '>
        <div>
          <h1 className='mb-4 text-lg font-semibold'>Get in Touch</h1>
          <div className='text-sm flex flex-col gap-2 '>
            <div className='flex gap-3 items-center cursor-pointer hover:text-zinc-300'>
              <FaPhoneAlt/>
              <p>0300241750</p>
            </div>
            <div className='flex gap-3 items-center cursor-pointer hover:text-zinc-300'>
              <FaLocationDot/>
              <p>DHA defence phase 4 near Meezan Babk </p>
            </div>
            <div className='flex gap-3 items-center cursor-pointer hover:text-zinc-300'>
              <IoMdMail/>
              <p className='break-words w-full'>shaheerwaqar02@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className='mb-4 text-lg font-semibold'>Quick Links</h1>
          <div className='text-sm flex flex-col gap-2 '>
            <NavLink to='/' className={`hover:underline`}>Home</NavLink>
            <NavLink to='/about' className={`hover:underline`}>About us</NavLink>
            <NavLink to='/product' className={`hover:underline`}>All products</NavLink>

          </div>
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <p className='px-5  border-t text-[10px] text-center'>© 2024 shaheer waqar. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer