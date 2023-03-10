import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const isInCart = cartItems.find((item) => item.id === productToAdd.id);
  if (isInCart) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const isItemInCart = cartItems.find((item) => item.id === itemToRemove.id);
  if (isItemInCart.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const CartContext = createContext({
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItems: [],
  cartTotal: 0,
});

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
    setCartTotal(newTotal);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const value = { cartItems, addItemToCart, removeItemFromCart, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
