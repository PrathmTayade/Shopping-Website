import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { StateContext } from "./components/StateContext";
import CartPage from "./pages/CartPage";

export default function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productData = await response.json();
        const indianData = productData.map((item) => {
          item.price = dollToRs(item.price);
          return item;
        });

        await setProducts(indianData);
        // console.log(indianData);
      } catch (error) {
        const message = "Error fetching the data";
        throw new Error(message);
      }
    }
    fetchData();
  }, []);

  const addToCart = (e) => {
    setCartItem((cartItem) => [...cartItem, e]);
    console.log(cartItem);
  };

  const removeFromCart = (e) => {
    const removedItems = cartItem.filter((item) => item !== e);
    setCartItem(removedItems);
  };

  function cartHandler(e) {
    setShowCart(e);
    showCart
      ? (document.body.style.position = "")
      : (document.body.style.position = "fixed");
  }

  const dollToRs = (dollar) => {
    const rs = parseInt(dollar) * 81.91;
    return Math.round((rs + Number.EPSILON) * 100) / 100;
  };

  return (
    <StateContext.Provider
      value={{ products, cartItem, addToCart, removeFromCart }}
    >
      <div className="container   ">
        <img src="" alt="" />
        <NavBar cartHandler={cartHandler} />

        {showCart ? <Cart cartHandler={cartHandler} /> : null}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}
