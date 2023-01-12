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
        const res = await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((productsObj) => productsObj.products);
        return res
    }
);

const initialState={
    loading:false,
    products:[],
    currentPage:1,
    productsPerPage:8,//default
    error:'',
}
const productSlice =createSlice({
    name:'products',
    initialState,
    reducers:{
        //use arrow functions
        setCurrentPage:(state,action)=>{
            state.currentPage=action.payload;
        },

        setProductPerPage:(state,action)=>{
            state.productsPerPage=action.payload;  
        }
    },

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
export const {setCurrentPage,setProductPerPage} = productSlice.actions
