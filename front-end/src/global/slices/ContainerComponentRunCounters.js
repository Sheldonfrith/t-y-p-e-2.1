import { createSlice } from '@reduxjs/toolkit';

export const ContainerComponentRunCounters = createSlice({
    name: 'ContainerComponentRunCounters',
    initialState: {// have a section for each container component method
        HandleTypingInputMain: 0,
    },
    reducers: {
        changeState: (state,action) => {
            state = action.payload;
        },
        incrementCounterByName: (state,action) =>{
            state[action.payload] ++;
        },
        setCounterByName: (state, action) => {
            state[action.payload[0]] = action.payload[1];
        },
    },
});

export const { changeState, incrementCounterByName, setCounterByName } = ContainerComponentRunCounters.actions;

export const selectContainerComponentRunCounters = state => state.ContainerComponentRunCounters;

export default ContainerComponentRunCounters.reducer;
