import React, { useState, useEffect, useContext } from "react";
import classes from "./Product.module.css";
import { CartContext } from "../store/CartContext";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const context = useContext(CartContext);

  const addItem = () => {
    addItemToCart(product);
    setCount((prev) => prev + 1);
  };
  // const removeItem = () => {
  //   count > 0 && setCount((prev) => prev - 1);
  //   removeItemFromCart(product);
  // };
  useEffect(() => {
    setTotal(product.price * count);
  }, [count]);

  return (
    <>
      <div className={classes.card}>
        <img src={product.img} />
        <div className={classes.description}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <div>
            <div className={classes.cart__buttonwrapper}>
              <span>Count: {count}</span>
              <span>Total: ${total}</span>
              <div className={classes.cart__button} onClick={addItem}>
                <p>+</p>
              </div>
              {/* <div className={classes.cart__button} onClick={removeItem}>
                <p>-</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
