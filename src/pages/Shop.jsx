/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import ShopingCard from "../components/ShopingCard";
import { StateContext } from "../components/StateContext";

export default function Shop() {
  const { products } = useContext(StateContext);

  return (
    <div className="container w-screen scroll-smooth ">
      <div className=" flex auto-cols-auto grid-flow-row flex-col justify-center bg-slate-100 gap-6 p-6 text-gray-900  dark:bg-slate-900 dark:text-slate-100  md:grid md:grid-cols-3    ">
        {products.map((product) => (
          <div key={product.id}>
            <ShopingCard products={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
