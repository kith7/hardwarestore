import { createContext, useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";

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
const INITIAL_STATE = {
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItems: [],
  cartTotal: 0,
};
const CartContext = createContext(INITIAL_STATE);

const CartContextProvider = ({ children }) => {
  const [state, dispatProducts] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
    dispatProducts({
      type: ACTION_TYPE.UPDATE_TOTAL_PRICE,
      payload: { cartTotal: newTotal },
    });
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    const updatedCart = addCartItem(cartItems, productToAdd);
    dispatProducts({
      type: ACTION_TYPE.ADD_TO_CART,
      payload: { cartItems: updatedCart },
    });
  };

  const removeItemFromCart = (productToRemove) => {
    const updatedCart = removeCartItem(cartItems, productToRemove);
    dispatProducts({
      type: ACTION_TYPE.REMOVE_FROM_CART,
      payload: { cartItems: updatedCart },
    });
  };

  const value = {
    cartItems: state.cartItems,
    addItemToCart,
    removeItemFromCart,
    cartTotal: state.cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
