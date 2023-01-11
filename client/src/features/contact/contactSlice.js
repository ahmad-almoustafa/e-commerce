import { createSlice } from '@reduxjs/toolkit'


export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    status: { submitted: false, error: false },
    message: '',
    loading: false,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase('contact/submit/pending', (state) => {
        state.loading = true;
      })
      .addCase('contact/submit/fulfilled', (state, action) => {
        state.status = { submitted: true, error: false };
        state.message = action.payload;
        state.loading = false;
      })
      .addCase('contact/submit/rejected', (state, action) => {
        state.status = { submitted: false, error: true };
        state.message = action.payload.message;
        state.loading = false;
      });
  }
})

export const { setStatus, setMessage, setLoading } = contactSlice.actions;

export const submitContactUsForm = (data) => async (dispatch) => {
    // console.log('submitContactUsForm', data)
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const jsonResponse = await response.json();
      dispatch(setMessage(jsonResponse));
      if (!response.ok) {
        throw new Error(jsonResponse.message);
      }
      dispatch(setStatus({ submitted: true, error: false }));
    } catch (error) {
      dispatch(setMessage(error.message));
      dispatch(setStatus({ submitted: false, error: true }));
    }
  };
  

export const selectContact = (state) => state.contact;

export default contactSlice.reducer;
