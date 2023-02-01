import { createSlice } from "@reduxjs/toolkit";


const initialShippingState = {
  shippingMethods: [
    { id: 1, name: "Standard Shipping", cost: 5 },
    { id: 2, name: "Express Shipping", cost: 10 },
    { id: 3, name: "International Shipping", cost: 20 },
  ],
  selectedShippingMethod: 1, //int
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState: initialShippingState,
  reducers: {
    setShippingMethods: (state, action) => {
      state.shippingMethods = action.payload;
    },
    setSelectedShippingMethod: (state, action) => {
        console.log('setSelectedShippingMethod',action.payload )
      state.selectedShippingMethod = parseInt(action.payload); // make sure to parse the payload as int
    },
  },
});

export default shippingSlice.reducer;
export const { setShippingMethods, setSelectedShippingMethod } = shippingSlice.actions;
