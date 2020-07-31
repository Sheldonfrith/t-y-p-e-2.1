import { createSlice } from '@reduxjs/toolkit';

export const ContainerComponentTriggers = createSlice({
    name: 'ContainerComponentTriggers',
    initialState: {
        HandleTypingInputMain: 0,
    },
    reducers: {
        changeState: (state,action) => {
            state = action.payload;
        },
        runMethodByName: (state,action) => {
            state[action.payload] ++;
        }
    },
});

export const { changeState, runMethodByName } = ContainerComponentTriggers.actions;

export const selectContainerComponentTriggers = state => state.ContainerComponentTriggers;

export default ContainerComponentTriggers.reducer;
