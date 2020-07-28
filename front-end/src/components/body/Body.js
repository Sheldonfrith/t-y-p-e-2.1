import {Typography} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeContent,
  selectContent,
} from './bodySlice';
import QueryTester from '../query-tester/QueryTester';

export default function Body(props) {
    const content = useSelector(selectContent);
    const dispatch = useDispatch();

    const newRandomNumber = () => {
        return Math.random()*10;
    }
    return (
        <React.Fragment>
        <Typography>Body goes here. Random content using redux store: {content}</Typography>
        <button onClick={() => dispatch(changeContent(String(newRandomNumber())))}>get new number</button>
        <QueryTester/>
        </React.Fragment>
    );
}