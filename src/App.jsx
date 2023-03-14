import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { StateContext } from "./components/StateContext";
import CheckoutPage from "./pages/CheckoutPage";

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

  function closeCart() {
    setShowCart(false);
  }
  function openCart() {
    setShowCart(true);
  }

  const addToCart = (e) => {
    e.quantity = 1;
    setCartItem((cartItem) => [...cartItem, e]);
  };

  const removeFromCart = (e) => {
    const removedItems = cartItem.filter((item) => item !== e);
    setCartItem(removedItems);
  };

  const dollToRs = (dollar) => {
    const rs = parseInt(dollar) * 81.91;
    return Math.round((rs + Number.EPSILON) * 100) / 100;
  };

  return (
    <StateContext.Provider
      value={{
        products,
        cartItem,
        addToCart,
        removeFromCart,
        showCart,
        openCart,
        closeCart,
    
      }}
    >
      <div className="container h-screen  w-full ">
        <div className="flex h-full w-full flex-col  ">
          <NavBar />
          <Cart />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
    </StateContext.Provider>
  );
}
