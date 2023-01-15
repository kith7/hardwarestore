import React, { useState, useEffect } from "react";
import classes from "./Product.module.css";

const Product = ({ ...prod }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const addItem = () => {
    setCount((prev) => prev + 1);
  };
  const removeItem = () => {
    count > 0 && setCount((prev) => prev - 1);
  };
  useEffect(() => {
    setTotal(prod.price * count);
  }, [count]);

  return (
    <>
      <div className={classes.card} key={prod.id}>
        <img src={prod.img} />
        <div className={classes.description}>
          <h2>{prod.name}</h2>
          <p>${prod.price}</p>
          <div>
            <div className={classes.cart__buttonwrapper}>
              <span>Count: {count}</span>
              <span>Total: ${total}</span>
              <div className={classes.cart__button} onClick={() => addItem()}>
                <p>+</p>
              </div>
              <div
                className={classes.cart__button}
                onClick={() => removeItem()}
              >
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
