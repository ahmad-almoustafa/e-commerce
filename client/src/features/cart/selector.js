import { createSelector } from "reselect";
import { selectShippingCost } from "../shipping/selector";

//function that take obj{cart:val,... } and return the cart property of that object
// Arrow function, direct lookup
//rootReducer : cart:cartReducer,
const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);


const selectCartItemsSlice = (state) => state.cart.cartItems;

// total is derived from the state : calculated, no need to be part of the state
//memoized => only if cartItems changed the calc logic will be re-executed
export const selectCartTotal = createSelector([selectCartItemsSlice], (cartItems) =>
  Object.values(cartItems).reduce(
    (sum, curr) => sum + curr.product.price * curr.qty,
    0
  )
);

//total= cartTotal + shippingCost 
export const selectTotal = createSelector(
  [selectCartTotal, selectShippingCost],
  (cartTotal, shippingCost) => cartTotal > 0 ? cartTotal + shippingCost : 0
);

//memoized => only if cartItems changed the calc logic will be re-executed
export const selectCartCount = createSelector([selectCartItemsSlice], (cartItems) =>
  Object.values(cartItems).reduce(
    (count, curr) => count +  curr.qty,
    0
  )
);

//memoized 
export const selectIsCartOpen = createSelector(
  [selectCartReducer], 
  (cart) =>cart.isCartOpen
);

