import { createContext, useReducer } from "react";
export const CartContext = createContext();
const initialState = {
  cart: [],
};


function cartReducer(state, action) {
  console.log("Cart Reducer is running");
  console.log("Current State:", state);
  console.log("Action received:", action);


  switch (action.type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART case is running");
      console.log("Product to add:", action.payload);


      return {
        cart: [...state.cart, action.payload],
      };


    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART case is running");
      console.log("Index to remove:", action.payload);


      return {
        cart: state.cart.filter(
          (item, index) => index !== action.payload
        ),
      };

      case "CLEAR_CART":
        return {
          cart: []
        };


   
  }
}


export function CartProvider({ children }) {
  console.log("CartProvider is running");


  const [state, dispatch] = useReducer(cartReducer, initialState);


  console.log("Current Cart:", state.cart);


  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
