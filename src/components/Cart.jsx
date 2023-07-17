import React from "react";
import { useSelector } from "react-redux";

import { Header, CartListing, EmptyCartPage } from "../components";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalPrice = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  return (
    <div>
      <Header />
      {cartItems.length === 0 ? (
        <EmptyCartPage />
      ) : (
        <CartListing cartItems={cartItems} totalPrice={totalPrice} />
      )}
    </div>
  );
};

export default Cart;
