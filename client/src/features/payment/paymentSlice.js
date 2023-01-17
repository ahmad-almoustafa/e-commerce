import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    stripe: {
      publishableKey: "",
      clientSecret: "",
    },
  },
  reducers: {
    setPublishableKey: (state, action) => {
      state.stripe.publishableKey = action.payload;
    },
    setClientSecret: (state, action) => {
      state.stripe.clientSecret = action.payload;
    },
  },
});

export default paymentSlice.reducer;
export const { setClientSecret, setPublishableKey } = paymentSlice.actions;
