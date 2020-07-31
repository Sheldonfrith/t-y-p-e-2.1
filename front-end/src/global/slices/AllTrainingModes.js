import { createSlice } from '@reduxjs/toolkit';

export const AllTrainingModes = createSlice({
    name: 'AllTrainingModes',
    initialState: {
        value: 'INITIALVALUEHERE'
    },
    reducers: {
        changeState: (state,action) => {
            state.value = action.payload;
        },
    },
});

export const { changeState } = AllTrainingModes.actions;

export const selectAllTrainingModes = state => state.AllTrainingModes.value;

export default AllTrainingModes.reducer;
