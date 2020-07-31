import { createSlice } from '@reduxjs/toolkit';

export const TypingInput = createSlice({
    name: 'TypingInput',
    initialState: {
            currentValue: '',
            previousValue: '',
            currentIndex: 0, //character at position of currentIndex should be the same as currentValue if typed correctly
            isListening: true,
            errorState: false,
    },
    reducers: {
        changeState: (state,action) => {
            state = action.payload;
        },
        newInput: (state, action) => {
            state.previousValue = state.currentValue;
            state.currentValue = action.payload;
        },
        changeListening: (state, action) => {
            state.isListening = action.payload;
        },
        incrementCurrentIndex: (state) => {
            state.currentIndex ++;
        },
        decrementCurrentIndex: (state) => {
            state.currentIndex --;
        },
        setCurrentIndex: (state,action) => {
            state.currentIndex = action.payload;
        },
        setErrorState: (state, action) =>{
            state.errorState = action.payload;
        },
    },
});

export const { changeState, newInput, changeListening, setErrorState, incrementCurrentIndex, decrementCurrentIndex, setCurrentIndex } = TypingInput.actions;

export const selectTypingInput = state => state.TypingInput;
export const selectTypingInputCurrent = state => state.TypingInput.currentValue;
export const selectTypingInputPrevious = state => state.TypingInput.previousValue;
export const selectTypingInputIsListening = state => state.TypingInput.isListening;
export const selectCurrentIndex = state => state.TypingInput.currentIndex;
export const selectErrorState = state => state.TypingInput.errorState;

export default TypingInput.reducer;
