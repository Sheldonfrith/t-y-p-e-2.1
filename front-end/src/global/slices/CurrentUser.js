import { createSlice } from '@reduxjs/toolkit';

export const CurrentUser = createSlice({
    name: 'CurrentUser',
    initialState: {
        value: 'INITIALVALUEHERE'
    },
    reducers: {
        changeState: (state,action) => {
            state.value = action.payload;
        },
    },
});

export const { changeState } = CurrentUser.actions;

export const selectCurrentUser = state => state.CurrentUser.value;

export default CurrentUser.reducer;
