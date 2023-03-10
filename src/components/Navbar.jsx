/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import DarkMode from "./darkMode";
import { StateContext } from "./StateContext";

export default function NavBar({ cartHandler }) {
  const { cartItem } = useContext(StateContext);

  return (
    <div className=" container relative flex w-full items-center justify-between border border-gray-200  bg-slate-100 p-3  text-slate-900 shadow dark:border-gray-700 dark:bg-gray-800   dark:text-slate-50  ">
      <div className=" ">
        <Link to="/">
          <img src={logo} className="h-8 w-8" alt="shopping logo" />
        </Link>
      </div>
      <div className="order-1 mx-3 flex items-center justify-between text-center md:flex-1  ">
        {/* <div>
          <svg
            className=" h-8 w-8 md:hidden "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 17H20M4 12H20M4 7H20"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
        <ul
          role="list"
          className=" flex  flex-auto items-center  justify-evenly   space-x-2 text-xl  "
        >
          <li className=" hidden transition-all duration-100 ease-in-out hover:scale-110 hover:font-bold hover:text-purple-600   md:block">
            <Link to="/">Home</Link>
          </li>
          <li className=" transition-all duration-100 ease-in-out hover:scale-110 hover:font-bold   hover:text-purple-600">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hidden transition-all duration-100 ease-in-out hover:scale-110 hover:font-bold hover:text-purple-600   md:block">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      

      <div
        onClick={() => cartHandler(true)}
        className=" relative  order-last  cursor-pointer  rounded-lg p-3 md:relative  "
      >
        <div className=" absolute top-0 left-0 h-4 w-4 select-none rounded-full bg-red-500  text-center text-xs text-white  ">
          {cartItem.length}
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 transition-all duration-100 ease-in-out hover:scale-110   hover:text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
