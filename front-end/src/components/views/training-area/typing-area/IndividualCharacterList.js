//material ui
import { makeStyles } from '@material-ui/core/styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {selectCurrentTTTJSXList} from '../../../../global/slices/CurrentTTT';

// react
import React from 'react';
import PropTypes from 'prop-types';

// my components


// this component renders text-to-be-typed as a list of individual-character components

export default function IndividualCharacterList(props){
    const currentTTTJSXList = useSelector(selectCurrentTTTJSXList);

    return (
        <div className="IndividualCharacterList TypingAreaChild">
            {currentTTTJSXList}
        </div>
    );
}