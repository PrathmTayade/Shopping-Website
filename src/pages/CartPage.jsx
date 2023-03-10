import React, { useContext } from "react";
import CartItem from "../components/cartItem";
import { StateContext } from "../components/StateContext";

export default function CartPage() {
  const context = useContext(StateContext);

  function totalPrice() {
    const total = context.cartItem.map((item) => item.price);
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
    <div className="dark:bg-slate-900 bg-slate-100 h-screen  ">
      <div className="  w-screen overflow-auto p-5 ">
        <div className="mx-auto border  shadow-md ">
          <table className="  mx-auto w-full table-auto  text-center   text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50  uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className=" ">
                <th className=" py-3 ">Item</th>
                <th className=" py-3 ">Quantity</th>
                <th className=" py-3 ">Price</th>
              </tr>
            </thead>
            <CartItem item={context.cartItem} price={price} />
          </table>
        </div>
      </div>
      <div className="flex  justify-evenly  px-5  text-2xl    ">
        <div className=" font-bold  ">Total Price:</div>
        <div className="">=</div>
        <div className=" px-10 ">₹ {price}</div>
      </div>
      <div className="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6 md:justify-end">
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
