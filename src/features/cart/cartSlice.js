import { createSlice, current } from "@reduxjs/toolkit";

/**
 * createSlice => the standard approach for writing Redux logic.
 */
const initialState = {
  cartItems: {},// {id :{product: product,qty: 1},
  isCartOpen: false,
};


const cartSlice = createSlice({
  // A name, used in action types
  name: "cart",
  // The initial state for the reducer
  initialState,
  reducers: {
   
    /**
     * map with 'cart/addItem'
     * with slice reducer => you can directly mutate the state =>createSlice use 'immer' library under the hood
     */
    addItem(state, action) {
      const product=action.payload;
      // console.log(' addItem product:', product);
      if (product.id in state.cartItems) {
        state.cartItems[product.id].qty++;
      }else{
        state.cartItems[product.id] = {
          product: product,
          qty: 1,
        };
      }
    },
    removeItem(state, action) {
      const productID=action.payload;
     // console.log(current(state))//use current() to log the state instead or the proxy obj
      delete state.cartItems[productID]
    },
    setItemQty(state,action){
      console.log(' setItemQty:', action.payload);
       state.cartItems[action.payload.productID].qty=action.payload.qty 
    },
    
    setIsCartOpen(state, action) {
      state.isCartOpen=action.payload
    }
  },
});

// export const cartReducer = cartSlice.reducer;
export default  cartSlice.reducer; // you can import => import nameXYZ from cartSlice
export const { addItem,removeItem,setItemQty, setIsCartOpen} = cartSlice.actions;
