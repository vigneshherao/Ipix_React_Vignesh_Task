import React from "react";
import { GrCart } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbUserSquareRounded } from "react-icons/tb";


const Navbar = () => {

  const cartItems = useSelector((store) => store.cart.items.length);

  return (
    <div>
      <div className="w-full h-20 bg-white flex justify-between px-10 sm:px-20 items-center shadow-md">
        <div>
          <a href="/" className="text-black font-bold text-xl">
            IpixCom
          </a>
        </div>

        <div className="hidden sm:flex justify-center">
          <input
            className='w-[300px] md:rounded-l-full  md:p-2 px-6 border border-gray-200"'
            type="text"
            placeholder="Search"
          ></input>
          <button className="rounded-r-full py-3 bg-gray-100 px-4 border border-gray-200">
            <BiSearch />
          </button>
        </div>
       <div className="flex justify-center">
       <div className="mr-12 flex items-center">
       <TbUserSquareRounded />
          <Link to={"/users"}><span className="ml-2 font-bold">Users</span></Link>
        </div>
        <div className="flex items-center">
          <GrCart />
          <span className="ml-2 font-bold">{cartItems}-Items</span>
        </div>
       </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
