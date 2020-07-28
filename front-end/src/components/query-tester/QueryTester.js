import {Typography} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeQueryTestResult,
  selectQueryTestResult,
} from './queryTesterSlice';
import {testRequest} from '../../global/httpRequests';
import { handleError } from './../../global/utils';

export default function Body(props) {
    const queryTestResult = useSelector(selectQueryTestResult);
    const dispatch = useDispatch();

    const sendTestQuery = async () =>{
      await testRequest().then(result => {
        const resultValue = result.value? result.value: result;
        dispatch(changeQueryTestResult(resultValue));
      })
    }
    return (
        <React.Fragment>
        <Typography>Test out backend... pressing this button should display 'test successful', here: {queryTestResult}</Typography>
        <button onClick={sendTestQuery}>Send Query</button>
        </React.Fragment>
    );
}