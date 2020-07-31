import { createSlice } from '@reduxjs/toolkit';

export const CurrentStats = createSlice({
    name: 'CurrentStats',
    initialState: {
            totalKeyPresses: 0,
            correctlyTyped: {},
    },
    reducers: {
        changeState: (state,action) => {
            state = action.payload;
        },
        incrementTotalKeyPresses: (state) => {
            state.totalKeyPresses ++;
        },
        setTotalKeyPresses: (state, action) => {
            state.totalKeyPresses = action.payload;
        },
        incrementCorrectlyTypedAtKey: (state, action) => {
            state.correctlyTyped[action.payload] ++;
        }
    },
});

export const { changeState, incrementTotalKeyPresses, incrementCorrectlyTypedAtKey, setTotalKeyPresses, pushToCorrectlyTyped } = CurrentStats.actions;

export const selectCurrentStats = state => state.CurrentStats;
export const selectTotalKeyPresses = state => state.CurrentStats.totalKeyPresses;
export const selectCorrectlyTyped = state => state.CurrentStats.correctlyTyped;

export default CurrentStats.reducer;
