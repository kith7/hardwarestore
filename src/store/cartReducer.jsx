const ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_TOTAL_PRICE: "UPDATE_TOTAL_PRICE",
};

const INITIAL_STATE = {
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ADD_TO_CART: {
      console.log("ADD to cart", payload);
      return { ...state, cartItems: payload.cartItems };
    }
    case ACTION_TYPE.REMOVE_FROM_CART: {
      console.log("Remove from cart", payload);
      return { ...state, cartItems: payload.cartItems };
    }
    case ACTION_TYPE.UPDATE_TOTAL_PRICE: {
      console.log("Calculate tota", payload);
      return { ...state, cartTotal: payload.cartTotal };
    }
    default: {
      {
        return { ...state };
      }
    }
  }
};

export { cartReducer, ACTION_TYPE, INITIAL_STATE };
