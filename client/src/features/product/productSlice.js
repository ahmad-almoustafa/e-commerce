import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * createAsyncThunk => generates promise lifecycle action types:
 * initial call => 'products/fetch/pending' action type is dispatched => useful for state.loading=true;
 * successful => 'products/fetch/fulfilled' action type is dispatched  => useful for state.loading=false;
 * error=> 'products/fetch/rejected' action type is dispatched  => useful for state.loading=false;
 *
 * createAsyncThunk => return standard Redux thunk action creator:
 * fetchProducts.pending =>  dispatches an  'products/fetch/pending' action and so on.
 *
 */
export const fetchProducts = createAsyncThunk(
  //1st param => action type string prefix
  "products/fetch",
  //2nd param => callback function
  async () => {
    try{
        const response = await axios.get("https://dummyjson.com/products");
        // console.log('response:',response?.data.products)
        return response?.data.products;
    } catch(error){
        throw error
    }
  }
);

const initialState = {
  loading: false,
  products: [],
  currentPage: 1,
  productsPerPage: 8, //default
  error: "",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //use arrow functions
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setProductPerPage: (state, action) => {
      state.productsPerPage = action.payload;
    },
  },

  /**
   * handle actions that are not defined in the reducers field.
   * e.g handle 'createAsyncThunk' 3 different actions(pending,fulfilled,rejected)
   */
  extraReducers: (builder) => {
    //match the createAsyncThunk actions and update the slice state accordingly
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
export const { setCurrentPage, setProductPerPage } = productSlice.actions;
