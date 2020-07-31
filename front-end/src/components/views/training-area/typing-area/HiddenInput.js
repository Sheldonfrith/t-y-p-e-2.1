
//material ui
import { makeStyles } from '@material-ui/core/styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {pause, unPause, selectIsPaused} from '../../../../global/slices/IsPaused';
import {newInput, changeListening, selectTypingInputCurrent, selectTypingInputIsListening, selectCurrentIndex, selectErrorState, setErrorState} from '../../../../global/slices/TypingInput';
import {selectCurrentView} from '../../../../global/slices/CurrentView';
import { selectCurrentTTTCharList } from '../../../../global/slices/CurrentTTT';
import {incrementTotalKeyPresses, selectTotalKeyPresses, selectCorrectlyTyped, pushToCorrectlyTyped} from '../../../../global/slices/CurrentStats';
import { selectAutoPauseTime } from '../../../../global/slices/CurrentTTTSettings';
import {runMethodByName} from '../../../../global/slices/ContainerComponentTriggers';


// react
import React from 'react';
import PropTypes from 'prop-types';

// my components



export default function HiddenInput () {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const currentView = useSelector(selectCurrentView);
    const isListening = useSelector(selectTypingInputIsListening);
    const isPaused = useSelector(selectIsPaused);
    const currentTTTCharList = useSelector(selectCurrentTTTCharList);
    const totalKeyPresses = useSelector(selectTotalKeyPresses);
    const autoPauseTime = useSelector(selectAutoPauseTime);
    const errorState = useSeSelector(selectCorrectlyTyped);

    const restartAutoPauseTimer= () => {
         const totalKeyPressesBeforeTimeout = totalKeyPresses;
         setTimeout(() => {
           // console.log(this.totalKeyPresses-totalKeyPressesBeforeTimeout);
           if (totalKeyPressesBeforeTimeout === totalKeyPresses){
             dispatch(pause());
           }
           return;
         }
         ,autoPauseTime);
       }
      
    const sendToNextHandler=(key)=>{
      dispatch(newInput(key));
      dispatch(runMethodByName('HandleTypingInputMain'));
    }
    const handleInput = (event) => {
    //clear the input box so only individual characters are returned from the input event
    setValue = '';
    sendToNextHandler(event.target.value);
    }

    const handleKeyDown = (event) => {
    //Detect if we are in the mainView (TODO, make this more precise so it detects if typingarea component is active/visible)
    if(currentView != 'mainView') return;

    //restart the autopause timer
    restartAutoPauseTimer();

    //detect backspace event and handle it
    if(event.key ==='Backspace'){
     sendToNextHandler(event.key);
    }
    }
    return (
        <input 
        id="hiddenInput" 
        type="text" 
        value={value} 
        className="hiddenInput TypingAreaChild" 
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onBlur={dispatch(pause())} 
        onFocus={dispatch(unPause())}
        />
    );
}