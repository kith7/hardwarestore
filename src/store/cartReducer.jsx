const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD to cart", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("Removed", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_TOTAL":
      console.log("Removed", payload);
      return {
        ...state,
        products: payload.products,
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
