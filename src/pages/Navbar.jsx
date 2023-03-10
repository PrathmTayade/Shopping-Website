/* eslint-disable react/prop-types */
import { Tab } from "@headlessui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import DarkMode from "../components/darkMode";
import { StateContext } from "../components/StateContext";

export default function NavBar() {
  const { cartItem, openCart } = useContext(StateContext);
  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }

  return (
    <div className=" container relative flex w-full items-center justify-between border border-gray-200  bg-slate-100 p-3  text-slate-900 shadow dark:border-gray-700 dark:bg-gray-800   dark:text-slate-50  ">
      <div className=" ">
        <Link to="/">
          <img src={logo} className="h-8 w-8" alt="shopping logo" />
        </Link>
      </div>
      {/* <DarkMode /> */}
      {/* <Tab.Group className="flex-1">
        <Tab.List
          className={"flex  space-x-1 rounded-xl bg-blue-900/20 p-1"}
        >
          <Link to="/" className="w-full">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Home
            </Tab>
          </Link>
         <Link to="/shop" className="w-full"> <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Shop
          </Tab></Link>
         <Link to="/cart" className="w-full"> <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Cart
          </Tab></Link>
        </Tab.List>
      </Tab.Group> */}

      <div className="order-1 mx-3 flex items-center justify-between text-center md:flex-1  ">
        <div>
          {/* <svg
            className=" h-8 w-8  "
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
          </svg> */}
        </div>
        <ul
          role="list"
          className=" flex flex-auto list-none items-center  justify-evenly   space-x-2 text-xl  "
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
        onClick={openCart}
        className=" relative order-last cursor-pointer  rounded-lg p-3 md:relative  "
      >
        <div className=" absolute top-0 left-0 h-4 w-4 select-none rounded-full bg-red-500  flex items-center justify-center text-xs font-medium  text-white  ">
          <div> {cartItem.length}</div>
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
