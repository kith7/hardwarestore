import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const INITIAL_STATE = {
  total: 0,
  products: [],
};
const CartContext = createContext(INITIAL_STATE);

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartTotal = (products) => {
    let updatedTotal = products.reduce((totalPrice, cartItem) => {
      totalPrice = cartItem.price * cartItem.quantity + totalPrice;
      return totalPrice;
    }, 0);
    dispatch({
      type: "UPDATED_PRICE",
      payload: {
        updatedTotal,
      },
    });
  };

  const addToCart = (product) => {
    const newProduct = products.filter((item) => {
      item.id === state.product.id;
    });
    if (newProduct) {
      const newProducts = [
        ...state.products,
        { ...product, quantity: product.quantity + 1 },
      ];
    } else {
      const newProducts = [...state.products, product];
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        total: updateCartTotal(),
        newProducts,
      },
    });
  };

  return <CartContext.Provider>{children}</CartContext.Provider>;
};
