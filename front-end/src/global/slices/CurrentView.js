import { createSlice } from '@reduxjs/toolkit';

export const CurrentView = createSlice({
    name: 'CurrentView',
    initialState: {
        name: 'TrainingArea',
    },
    reducers: {
        changeState: (state,action) => {
            state.name = action.payload;
        },
    },
});

export const { changeState } = CurrentView.actions;

export const selectCurrentView = state => state.CurrentView;

export default CurrentView.reducer;
