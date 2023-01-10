import { createSelector } from "@reduxjs/toolkit";

 //<=> match with the key used on the store combineReducers)
const selectProductReducer = (state) => state.product;

export const selectProduct = createSelector(
    [selectProductReducer], (product) => product
)