import { createSlice } from '@reduxjs/toolkit';

export const SLICENAMEHERE = createSlice({
    name: 'SLICENAMEHERE',
    initialState: {
        value: 'INITIALVALUEHERE',
    },
    reducers: {
        changeState: (state,action) => {
            state = action.payload;
        },
    },
});

export const { changeState } = SLICENAMEHERE.actions;

export const selectSLICENAMEHERE = state => state.SLICENAMEHERE;

export default SLICENAMEHERE.reducer;
