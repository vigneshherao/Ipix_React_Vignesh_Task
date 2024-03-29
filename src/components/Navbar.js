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
          <Link to={"/users"}>
            <div className="mr-12 flex items-center">
              <TbUserSquareRounded />
              <span className="ml-2 font-bold">Users</span>
            </div>
          </Link>
          <Link to={"/cart"}>
          <div className="flex items-center cursor-pointer">
            <GrCart />
            <span className="ml-2 font-bold">{cartItems}-Items</span>
          </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
