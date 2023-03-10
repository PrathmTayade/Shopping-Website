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
      <Dialog as="div" className="relative z-50 container" onClose={closeCart}>
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
                  className="text-2xl   font-medium text-center leading-6 text-gray-900 dark:text-slate-50"
                >
                  Items in Cart
                </Dialog.Title>

                <div className="relative flex-auto p-6 ">
                  {cartItem.length > 0 ? (
                    <table className="table-auto  ">
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>price</th>
                          <th>remove </th>
                        </tr>
                      </thead>
                      <tbody className=" divi  divide-y-2 divide-gray-300   ">
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
                  ) : (
                    <div>
                      <div>No items in cart</div>
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
