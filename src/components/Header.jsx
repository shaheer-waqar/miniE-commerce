import React, { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { BsCartPlusFill } from "react-icons/bs";



function Header() {
  let location = useLocation();
  let isProductActive = location.pathname === "/product"
  let NavColor = location.pathname === "/";
  let [toggle,setToggle] = useState(false);
  return (
  <>
  <div className='absolute w-full h-30'>
    <div className={`${!NavColor ? "bg-zinc-900 text-white" : ""}
        !NavColor ? "bg-zinc-900text-white " : ""}  relative z-[100] px-5 items-center    justify-between w-full py-2 flex`}>

      <div>
        <NavLink to="/">
        <h1 className='font-bold text-2xl cursor-pointer'>LOGO.</h1>
        </NavLink>
      </div>

      <div className={`absolute md:static w-full right-0 md:w-auto flex justify-between
          bg-white md:bg-transparent  z-2 px-1 py-2 font-[500] 
          transition-all  ${toggle ? "top-0" : "top-[-120px]"}
          ${!NavColor ? "text-black md:text-white" : ""}` }>

        <ul className='flex flex-col md:flex-row gap-x-5 gap-y-0'>
          <li onClick={()=>setToggle(false)}><NavLink to="/" className={({isActive})=> `${isActive ? "text-orange-500" : ""}`}>Home</NavLink></li>
          <li onClick={()=>setToggle(false)}><NavLink to="/about"  className={({isActive})=> `${isActive ? "text-orange-500" : ""}`}>About us</NavLink></li>
          <li onClick={()=>setToggle(false)}><NavLink to="/product" className={`${isProductActive ? "text-orange-500" : ""}`}>All Products</NavLink></li>
        </ul>

        <div className='text-3xl inline-block md:hidden'>
          <IoCloseSharp onClick={()=>setToggle((prev)=>!prev)}/>          
        </div>

      </div>

      <div className='flex gap-2 items-center'>
        <div className='text-xl'>
        <BsCartPlusFill />
        </div>
        <div className='block md:hidden text-3xl'>
        <IoMdMenu onClick={()=>setToggle((prev)=>!prev)}/>
        
         </div>
      </div>
    </div>
  </div>
  
  <Outlet/>
   </>
  )
}

export default Header