import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import IndividualCharacter from '../../components/views/training-area/typing-area/IndividualCharacter';

const newCharList = () => {
    return ['a','b','c'];
}



export const CurrentTTT = createSlice({
    name: 'CurrentTTT',
    initialState: {
            charList: newCharList(),
    },
    reducers: {
        changeState: (state, action) => {
            state = action.payload;
        },
        generateNewTTT: (state) => {
            state.charList = newCharList();
        }

    },
});

export const { changeState } = CurrentTTT.actions;

export const selectCurrentTTT = state => state.CurrentTTT;
export const selectCurrentTTTJSXList = state => {
    return state.CurrentTTT.charList.map(char => <IndividualCharacter char={char}/>);
}
export const selectCurrentTTTCharList = state => state.CurrentTTT.charList;


export default CurrentTTT.reducer;
