import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import AddToCart from "./AddToCart";

function Header({ cartData, deleteHandler }) {
  let location = useLocation();
  let isProductActive = location.pathname === "/product";
  let NavColor = location.pathname === "/";
  let [toggle, setToggle] = useState(false);
  let [cartToggle, setCartToggle] = useState(false);
  return (
    <>
      <div className="absolute w-full h-30">
        <div
          className={`${!NavColor ? "bg-zinc-900 text-white" : ""}
        !NavColor ? "bg-zinc-900text-white " : ""}  relative z-[100] px-5 items-center    justify-between w-full py-2 flex`}
        >
          <div>
            <NavLink to="/">
              <h1 className="font-bold text-2xl cursor-pointer">LOGO.</h1>
            </NavLink>
          </div>

          <div
            className={`absolute md:static w-full right-0 md:w-auto flex justify-between
          bg-white md:bg-transparent  z-[100] px-1 py-2 font-[500] 
          transition-all duration-300  ${toggle ? "top-0" : "top-[-120px]"}
          ${!NavColor ? "text-black md:text-white" : ""}`}
          >
            <ul className="flex flex-col md:flex-row gap-x-5 gap-y-0">
              <li onClick={() => setToggle(false)}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-500" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={() => setToggle(false)}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-500" : ""}`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li onClick={() => setToggle(false)}>
                <NavLink
                  to="/product"
                  className={`${isProductActive ? "text-orange-500" : ""}`}
                >
                  All Products
                </NavLink>
              </li>
            </ul>

            <div className="text-3xl inline-block md:hidden">
              <IoCloseSharp onClick={() => setToggle((prev) => !prev)} />
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div
              className="text-xl relative"
              onClick={() => setCartToggle((prev) => !prev)}
            >
              <FaShoppingCart />
              <p
                className="cursor-pointer bg-orange-500 absolute top-[-8px]
                right-[-10px]  text-[12px] flex justify-center text-white
                items-center text-center rounded-full w-[18px] h-[18px]"
              >{cartData.length}</p>
            </div>

            <div className="inline-block md:hidden text-3xl">
              <IoMdMenu onClick={() => setToggle((prev) => !prev)} />
            </div>
          </div>
        </div>
      </div>

      <AddToCart
        deleteHandler={deleteHandler}
        cartData={cartData}
        cartToggle={cartToggle}
        setCartToggle={setCartToggle}
      />
      <Outlet />
    </>
  );
}

export default Header;
