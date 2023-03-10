import React, { useContext } from "react";
import { StateContext } from "../components/StateContext";

export default function CartPage() {
  const { cartItem } = useContext(StateContext);

  function totalPrice() {
    const total = cartItem.map((item) => item.price);
    const initialValue = 0;
    const price = parseInt(
      total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )
    );
    return price;
  }
  const price = totalPrice();

  return (
    <div className="container flex flex-col bg-slate-50 dark:bg-slate-900   ">
      <div className=" w-full flex-auto overflow-auto p-5 ">
        <div className="mx-auto border  shadow-md ">
          <table className="  mx-auto w-full table-auto  text-center   text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50  uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className=" ">
                <th className=" py-3 ">Item</th>
                <th className=" py-3 ">Quantity</th>
                <th className=" py-3 ">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((items) => (
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
          </table>
        </div>
      </div>
      <div className="flex  justify-evenly  px-5  text-2xl    ">
        <div className=" font-bold  ">Total Price:</div>
        <div className="">=</div>
        <div className=" px-10 ">₹ {price}</div>
      </div>
      <div className=" flex  items-center justify-center rounded-b border-t border-solid border-slate-200 p-6 md:justify-end">
        <button
          className="mr-1 mb-1 rounded bg-green-500 px-6 py-3 text-sm font-bold uppercase text-black shadow outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:shadow-lg focus:outline-none active:bg-green-600"
          type="button"
          onClick={() => {
            alert("Payment are not supported yet :P ");
          }}
        >
          Checkout and pay
        </button>
      </div>
    </div>
  );
}
