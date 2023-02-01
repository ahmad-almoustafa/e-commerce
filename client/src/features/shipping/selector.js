import { createSelector } from "@reduxjs/toolkit";

 //<=> match with the key used on the store combineReducers)
const selectShippingReducer = (state) => state.shipping;

export const selectShippingMethods = createSelector(
    [selectShippingReducer], (shipping) => shipping.shippingMethods
)

export const selectSelectedShippingMethod= createSelector(
    [selectShippingReducer], (shipping) => shipping.selectedShippingMethod
)
export const selectShippingCost = createSelector(
    [selectShippingReducer],
    (shipping) => {
      const selectedShippingMethod = shipping.shippingMethods.find(
        (method) => method.id === shipping.selectedShippingMethod
      );
      console.log('*selectedShippingMethod', shipping.selectedShippingMethod)
      console.log('*shipping.shippingMethods', shipping.shippingMethods)
      
     console.log('*selectedShippingMethod', selectedShippingMethod)
      return selectedShippingMethod ? selectedShippingMethod.cost : 0;
    }
);

// export const selectShippingCost = createSelector(
//     [selectShippingReducer],
//     (shipping) => {
//       return shipping.selectedShippingMethod ? shipping.shippingMethods[shipping.selectedShippingMethod] : 0;
//     }
// );




