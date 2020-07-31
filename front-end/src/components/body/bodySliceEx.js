import { createSlice } from '@reduxjs/toolkit';

export const SLICENAMEHERE = createSlice({
  name: 'STATESLICENAMEHERE',
  initialState: {
   },
  reducers: {
    changeState: (state,action) => {
        state.value = action.payload;
    },
  },
});

export const { changeState } = SLICENAMEHERE.actions;

export const selectSLICENAMEHERE = state => state.STATESLICENAMEHERE.value;

export default SLICENAMEHERE.reducer;
