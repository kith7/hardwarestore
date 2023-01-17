import React, { Fragment, useContext } from "react";
import { CartContext } from "../store/CartContext";
import classes from "./CartItem.module.css";
const CartItem = ({ cartItem }) => {
  const { name, quantity, price, img, id } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const add = () => {
    addItemToCart(cartItem);
  };
  const remove = () => {
    removeItemFromCart(cartItem);
  };
  return (
    <div className={classes.card}>
      <img src={img} />
      <span>Name: {name} </span>
      <span>Quantity: {quantity} </span>
      <span> Price: ${quantity * price} </span>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
};

export default CartItem;
