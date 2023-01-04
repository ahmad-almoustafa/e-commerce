import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * createAsyncThunk => generates promise lifecycle action types using 'products/getProducts' as a prefix:
 * initial call=> products/getProducts/pending action type is dispatched, The callback then executes to return either a result or an error.
 * error=> products/getProducts/rejected action type is dispatched 
 * successful=> products/getProducts/fulfilled action type is dispatched.
 */
export const fetchAsyncProducts=createAsyncThunk(
    //1st param => action type string
    'products/fetchAsyncProducts',
    //2nd param => callback function 
    async (thunkAPI) => {
        // console.log('fetchAsyncProducts thunkAPI')
        const res = await fetch('https://dummyjson.com/products?limit=12')
        .then((res) => res.json())
        .then((productsObj) => productsObj.products);
        return res
    }
);

const initialState={
    loading:false,
    products:[],
    error:'',
}
const productSlice =createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncProducts.pending,(state,action)=>{
            state.loading=true;
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            state.loading=false;
           state.products=action.payload;
           state.error=''
        })

        builder.addCase(fetchAsyncProducts.rejected, (state, action) => {
            state.loading=false;
           state.products=[]
           state.error=action.error.message
        })
    },

})

export default productSlice.reducer;
