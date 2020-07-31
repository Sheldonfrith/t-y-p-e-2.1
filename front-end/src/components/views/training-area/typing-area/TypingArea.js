//material ui
import { makeStyles } from '@material-ui/core/styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {pause, unPause, selectIsPaused} from '../../../../global/slices/IsPaused';

// react
import React, {useCallback} from 'react';

// my components
import IndividualCharacterList from './IndividualCharacterList';
import PauseOverlay from './PauseOverlay';
import HiddenInput from './HiddenInput';

export default function TypingArea(props) {

    return (
        <div className="TypingArea">
          <IndividualCharacterList/>
          <PauseOverlay/>
          <HiddenInput/>   
        </div>
    );
}