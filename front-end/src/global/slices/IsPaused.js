import { createSlice } from '@reduxjs/toolkit';

export const IsPaused = createSlice({
    name: 'IsPaused',
    initialState: { 
            value: false,
            pauseOverlayDisplay: {display: 'none'},
    },
    reducers: {
        changeState: (state, action) => {
            state = action.payload;
        },
        pause: (state) => {
            state.value = true;
            state.pauseOverlayDisplay = {display: 'block'};
        },
        unPause: (state) => {
            state.value = false;
            state.pauseOverlayDisplay = {display: 'none'};
        }
    },
});

export const { changeState, pause, unPause} = IsPaused.actions;

export const selectIsPaused = state => state.IsPaused.value;
export const selectPauseOverlayDisplay = state => state.IsPaused.pauseOverlayDisplay;

export default IsPaused.reducer;
