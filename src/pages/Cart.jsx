/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../components/StateContext";

export default function Cart() {
  const { cartItem, removeFromCart, showCart, closeCart } =
    useContext(StateContext);
  const navigate = useNavigate();

  return (
    <Transition appear show={showCart} as={Fragment}>
      <Dialog as="div" className="container relative z-50" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-800">
                <Dialog.Title
                  as="h3"
                  className="text-center   text-2xl font-medium leading-6 text-gray-900 dark:text-slate-50"
                >
                  Items in Cart
                </Dialog.Title>

                <div className="relative flex-auto p-4  ">
                  {cartItem.length > 0 ? (
                    <table className="table-auto  divide-y-2 divide-black ">
                      <thead>
                        <tr className="uppercase">
                          <th>Item</th>
                          <th>price</th>
                          <th>remove </th>
                        </tr>
                      </thead>
                      <tbody className="   divide-gray-300   ">
                        {cartItem.map((items) => (
                          <tr key={items.id} className=" ">
                            <td className=" ">
                              <div className=" text-sm  ">{items.title}</div>
                            </td>
                            <td className="">
                              <div className=""> ₹{items.price}</div>
                            </td>
                            <td className="  text-center  ">
                              <button
                                type="button"
                                onClick={() => {
                                  removeFromCart(items);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6 text-red-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className=" flex flex-col  ">
                      <div className="flex-auto  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="  text-gray-300/60 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-center text-lg  font-bold ">
                        No items in cart
                      </div>
                      <div> Please continue shooping </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap items-center justify-around rounded-b    border-t border-solid border-slate-200 p-6 sm:flex-nowrap ">
                    <button
                      className="min-h-12 mr-1 mb-1 flex-auto rounded bg-emerald-500 px-6 py-3    text-sm font-bold uppercase text-slate-100 shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                      type="button"
                      onClick={() => {
                        closeCart();
                        navigate("/shop");
                      }}
                    >
                      Continue Shopping
                    </button>
                    {cartItem.length === 0 || (
                      <div>
                        <button
                          className="min-h-12 mr-1 mb-1 flex-auto  rounded bg-amber-500 px-6 py-3 text-sm font-bold uppercase text-black shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-amber-600"
                          type="button"
                          onClick={() => {
                            closeCart();
                            navigate("/cart");
                          }}
                        >
                          Proceed to Checkout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
