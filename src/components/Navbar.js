import React from 'react'
import { GrCart } from "react-icons/gr";
import { BiSearch  } from "react-icons/bi";

const Navbar = () => {
  return (
<div className='w-full h-20 bg-white flex justify-between px-10 sm:px-20 items-center shadow-md'>
        <div>
           <a href='#' className='text-black font-bold text-xl'>IpixCom</a>
        </div>
        <div className='hidden sm:flex justify-center'>
            <input className='w-[300px] md:rounded-l-full  md:p-2 px-6 border border-gray-200"' type='text' placeholder='Search'></input>
            <button className='rounded-r-full py-3 bg-gray-100 px-4 border border-gray-200'><BiSearch/></button>
        </div>
        <div className='flex items-center'>
            <GrCart/>
            <span className='ml-2 font-bold'>1-Items</span>
        </div>
    </div>
  )
}

export default Navbar