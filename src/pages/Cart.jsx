/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../components/StateContext";

export default function Cart({ cartHandler }) {
  const { cartItem, removeFromCart } = useContext(StateContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container fixed inset-0  z-50 flex  items-center justify-center overflow-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="min-w-3xl relative  mx-6 my-6 md:mx-auto  md:w-1/2">
          {/*content*/}
          <div className="relative flex  flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold">Items in Cart</h3>
              <button
                className="float-right ml-auto border-0 p-1 text-3xl font-semibold leading-none outline-none focus:outline-none"
                onClick={() => cartHandler(false)}
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative  flex-auto p-6 ">
              <table className="table-auto  ">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>price</th>
                    <th>remove </th>
                  </tr>
                </thead>
                <tbody className="  ">
                  {cartItem.map((items) => (
                    <tr key={items.id} className=" ">
                      <td>
                        <div className=" ">{items.title}</div>
                      </td>
                      <td>
                        <div className="">{items.price}</div>
                      </td>
                      <td className=" text-center font-bold text-red-500 ">
                        <button
                          type="button"
                          onClick={() => {
                            removeFromCart(items);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*footer*/}
            <div className="flex   items-center justify-around  rounded-b border-t border-solid border-slate-200 p-6 ">
              <button
                className="min-h-12 mr-1 mb-1 rounded bg-emerald-500 px-6 py-3   text-sm font-bold uppercase text-slate-100 shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="button"
                onClick={() => {
                  navigate("/shop");
                  cartHandler(false);
                }}
              >
                Continue Shopping
              </button>
              <button
                className="min-h-12 mr-1  mb-1 rounded bg-amber-500 px-6 py-3 text-sm font-bold uppercase text-black shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-amber-600"
                type="button"
                onClick={() => {
                  navigate("/cart");
                  cartHandler(false);
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
