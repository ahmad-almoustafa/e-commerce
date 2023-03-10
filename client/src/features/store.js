import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import seoSlice from "./seo/seoSlice"
import { combineReducers } from "redux";
import paymentSlice from './payment/paymentSlice';
import shippingSlice from './shipping/shippingSlice';

/**
 * Redux application
 * 
 * - Create a Redux Store => store.js
 * - Reducer => handle only the dispatch logic => cartReducer.js
 * - Manage state update logic, "writes" logic => actions.js
 * - The logic for reading and deriving  additional data from the state, "reads" logic => selectors.js
 * - Dispatch actions from component  to the Redux reducers => use react redux api useDispatch();
 *  */


const rootReducer= combineReducers({
    product:productReducer,
    cart: cartReducer,
    seo: seoSlice.reducer,
    payment:paymentSlice,
    shipping:shippingSlice,
})

export const store=configureStore({
    reducer: rootReducer
});

