import { createSlice } from '@reduxjs/toolkit';

export const IsLoggedIn = createSlice({
  name: 'IsLoggedIn',
  initialState: {
    value: true,
  },
  reducers: {
    flip: (state) => {
        state.value = !state.value;
    },
    logIn: (state) => {
        state.value = true;
    },
    logOut: (state) => {
        state.value = false;
    },
  },
});

export const { flip, logIn, logOut} = IsLoggedIn.actions;

export const selectIsLoggedIn = state => state.IsLoggedIn.value;

export default IsLoggedIn.reducer;
