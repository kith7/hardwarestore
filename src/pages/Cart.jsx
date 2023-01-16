import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../store/CartContext";
const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div>
      {cartItems.length === 0 && <h3>Empty cart, add some items</h3>}
      {cartItems &&
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      {cartTotal > 0 && <h3>Total: ${cartTotal}</h3>}
    </div>
  );
};

export default Cart;
