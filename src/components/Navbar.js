import React from 'react'
import { GrCart } from "react-icons/gr";
import {navLinks} from "../utils/constants"

const Navbar = () => {
  return (
<div className='w-full h-20 bg-white flex justify-between px-10 sm:px-20 items-center shadow-md'>
        <div>
           <a href='#' className='text-black font-bold text-xl'>IpixCom</a>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex text-black font-semibold text-md gap-8'>
                {
                    navLinks.map((navItems)=><li key={navItems.id}>{navItems.name}</li>)
                }
            </ul>
        </div>
        <div className='flex items-center'>
            <GrCart/>
            <span className='ml-2'>1-Items</span>
        </div>
    </div>
  )
}

export default Navbar