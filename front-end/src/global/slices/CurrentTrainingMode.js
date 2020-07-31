import { createSlice } from '@reduxjs/toolkit';

export const CurrentTrainingMode = createSlice({
    name: 'CurrentTrainingMode',
    initialState: {
            name: 'Default',
            value: null,
        
    },
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload;
        },
    },
});

export const { changeState } = CurrentTrainingMode.actions;

export const selectCurrentTrainingMode = state => state.CurrentTrainingMode;

export default CurrentTrainingMode.reducer;
