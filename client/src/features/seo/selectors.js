import { createSelector } from "@reduxjs/toolkit";

 //<=> match with the key used on the store combineReducers
export const selectSeo = (state) => state.seo;