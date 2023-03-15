import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../components/StateContext";

export default function CheckoutPage() {
  const { cartItem } = useContext(StateContext);
  const [quantity, setQuantity] = useState();

  const [amount, setAmount] = useState();

  // useEffect(() => {
  //   const result = cartItem.reduce(
  //     (total, currentValue) =>
  //       (total = total + currentValue.quantity * currentValue.price),
  //     0
  //   );
  //   return setAmount(result), console.log(amount);
  // }, []);

  const total = () => {
    const result = cartItem.reduce(
      (total, currentValue) =>
        (total = total + currentValue.quantity * currentValue.price),
      0
    );
    return result;
  };

  return (
    <div className="container flex w-screen flex-1 flex-col bg-slate-50 dark:bg-slate-900   ">
      <div className=" w-full flex-auto overflow-auto p-5 ">
        <div className="grid-row-auto mx-auto grid border shadow-md ">
          <div className="flex justify-around border bg-slate-100 p-2 font-bold uppercase   text-slate-500 shadow-sm dark:bg-slate-900 ">
            <div>Item</div>
            <div>Quantity</div>
            <div>price</div>
          </div>

          {cartItem.map((item) => (
            <div key={item.id} className="flex justify-between">
              <CartItem item={item} changehandler={setAmount} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex   w-full justify-evenly  px-5  text-3xl    ">
        <div className=" font-bold  ">Total Price: </div>
        <div className="">
          <button onClick={() => console.log(total())}>total</button>
        </div>
        <div className=" md:px-10 ">₹ {amount} </div>
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

function CartItem({ item, changehandler }) {
  const [quantity, setQuantity] = useState(1);

  function incrementItems(item) {
    const noofitems = quantity + 1;
    setQuantity(noofitems);
    item.quantity++;
  }

  function decrementItems(item) {
    if (quantity <= 0) {
      return;
    } else {
      const noofitems = quantity - 1;

      setQuantity(noofitems);
      item.quantity--;
    }
  }
  return (
    <div className=" mx-auto w-full px-4 py-2    dark:text-gray-400">
      <div className="">
        <div className=" flex  ">
          <div className="  w-14 ">
            <img className="w-full " src={item.image} alt="" />
          </div>
          <div className="hidden px-3 py-2 text-lg font-bold md:block ">
            {item.title}
          </div>
        </div>
      </div>
      <div className=" px-6 py-4 ">
        <div className="flex flex-col  shadow-md  transition  duration-150 ease-in-out md:inline-flex  md:flex-row ">
          <div>
            <button
              type="button"
              onClick={() => incrementItems(item)}
              className="inline-block rounded-t bg-sky-400 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-sky-600 focus:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-700 md:rounded-l md:rounded-tr-none md:px-6"
            >
              +
            </button>
            <div className="inline-block bg-sky-400 px-3  pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-sky-600 focus:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-700 md:px-6">
              {item.quantity}
            </div>
            <button
              type="button"
              onClick={() => decrementItems(item)}
              className="inline-block rounded-b bg-sky-400 px-3 pt-2.5  pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-sky-600 focus:bg-sky-600 focus:outline-none focus:ring-0  active:bg-sky-700 md:rounded-r md:rounded-bl-none md:px-6"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div
        className=" px-6 py-4"
        onChange={() => {
          changehandler(item.price * quantity);
        }}
      >
        {item.price * quantity}
      </div>
    </div>
  );
}
