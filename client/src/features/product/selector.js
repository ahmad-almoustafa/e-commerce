import { createSelector } from "@reduxjs/toolkit";

 //<=> match with the key used on the store combineReducers)
const selectProductReducer = (state) => state.product;

export const selectProduct = createSelector(
    [selectProductReducer], (product) => product
)

export const selectProductsPerPage= createSelector(
    [selectProductReducer],(product)=>product.productsPerPage
)

export const selectCurrentPage= createSelector(
    [selectProductReducer],(product)=>product.currentPage
)