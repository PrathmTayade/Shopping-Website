/* eslint-disable react/prop-types */

import React from "react";

export default function CartItem({ item }) {
  return (
    <tbody>
      {item.map((items) => (
        <tr
          key={items.id}
          className=" border-b bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <td className=" px-6 py-4">
            <div className=" flex ">
              <div className="  w-14 ">
                <img className="w-full " src={items.image} alt="" />
              </div>
              <div className="hidden px-3 py-2 font-bold md:block ">
                {items.title}
              </div>
            </div>
          </td>
          <td className=" px-6 py-4 ">
            <div className="flex flex-col  shadow-md  transition  duration-150 ease-in-out md:inline-flex  md:flex-row ">
              <button
                type="button"
                className="inline-block rounded-t bg-sky-400 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-sky-600 focus:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-700 md:rounded-l md:rounded-tr-none md:px-6"
              >
                +
              </button>
              <button
                type="button"
                className="inline-block bg-sky-400 px-3  pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-sky-600 focus:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-700 md:px-6"
              >
                1
              </button>
              <button
                type="button"
                className="inline-block rounded-b bg-sky-400 px-3 pt-2.5  pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-sky-600 focus:bg-sky-600 focus:outline-none focus:ring-0  active:bg-sky-700 md:rounded-r md:rounded-bl-none md:px-6"
              >
                -
              </button>
            </div>
          </td>
          <td className=" px-6 py-4">{items.price}</td>
        </tr>
      ))}
    </tbody>
  );
}
