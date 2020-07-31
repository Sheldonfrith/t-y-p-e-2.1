import { createSlice } from '@reduxjs/toolkit';

export const CurrentTTTSettings = createSlice({
    name: 'CurrentTTTSettings',
    initialState: {
            autoPauseTime: 3000,
    },
    reducers: {
        changeState: (state,action) => {
            state = action.payload;
        },
        changeAutoPauseTime: (state, action) => {
            state.autoPauseTime = action.payload;
        }
    },
});

export const { changeState, changeAutoPauseTime } = CurrentTTTSettings.actions;

export const selectCurrentTTTSettings = state => state.CurrentTTTSettings;
export const selectAutoPauseTime = state => state.CurrentTTTSettings.autoPauseTime;

export default CurrentTTTSettings.reducer;
