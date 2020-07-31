//material ui
import { makeStyles } from '@material-ui/core/styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {selectIsPaused, selectPauseOverlayDisplay} from '../../../../global/slices/IsPaused';

// react
import React from 'react';
import PropTypes from 'prop-types';

// my components




export default function PauseOverlay(props) {
    const isPaused = useSelector(selectIsPaused);
    const display = useSelector(selectPauseOverlayDisplay);
    //display; should be either 'none' or 'block'
    return (
        <div id="pauseOverlay" className="TypingAreaChild" style={display}>
            <div id="pauseOverlayText" className="TypingAreaChild">Paused. Press Esc to unpause.</div>
        </div>
    );
}