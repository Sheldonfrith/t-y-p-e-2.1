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
import {selectContainerComponentRunCounters, setCounterByName} from '../../../../global/slices/ContainerComponentRunCounter';
import {selectContainerComponentTriggers} from '../../../../global/slices/ContainerComponentTriggers';


// react
import React from 'react';
import PropTypes from 'prop-types';

// my components



export default function HandleTypingInput () {
    const dispatch = useDispatch();
    const thisEventValue = useSelector(selectContainerComponentTriggers.HandleTypingInputMain);
    const previousEventValue = useSelector(selectContainerComponentRunCounters.HandleTypingInputMain);
    //primary variable for Main()
    const inputKey = useSelector(selectTypingInputCurrent);

    const currentView = useSelector(selectCurrentView);
    const isListening = useSelector(selectTypingInputIsListening);
    const isPaused = useSelector(selectIsPaused);
    const currentTTTCharList = useSelector(selectCurrentTTTCharList);
    const currentIndex = useSelector(selectCurrentIndex);
    const totalKeyPresses = useSelector(selectTotalKeyPresses);
    const autoPauseTime = useSelector(selectAutoPauseTime);
    const errorState = useSelector(selectErrorState);
    const correctlyTyped = useSelector(selectCorrectlyTyped);

    Main = () =>  {
    //prevent infinite loops and trigger the event on state change
    if(thisEventValue === previousEventValue) return;
    //let redux know I've handled the event
    dispatch(setCounterByName(['HandleTypingInputMain',thisEventValue]));
 
     //are we listening for keyDown right now? if not, exit
     if (isListening === false) return;

    //is focus currently in the input box? if not exit
    if (document.activeElement.id !=="hiddenInput") return;

    //is the typing paused? if so exit
    if (isPaused) return;

    // variables for this function
    const correctChar = currentTTTCharList[currentIndex].value;

    //increase the total key count
    dispatch(incrementTotalKeyPresses());

    //Case 1: correct
    //detect if the input Key matches the activekey in the sequence and not in error state
    if (inputKey === correctChar && errorState < 1) {
      this.calcTypingSpeed();
      this.calcCharSpeed(inputKey);
      //update correctlyTyped list
      this.correctlyTyped[inputKey] = this.correctlyTyped[inputKey]?this.correctlyTyped[inputKey]+1:1;

      //TODO updateRecords here
      this.updateComponents('correct');
      return;
    }

    //Case 2: incorrect.... wrong key pressed, not backspace, and not already in an error state
    if (inputKey !== correctChar && inputKey !== 'Backspace' && this.errorState < 1) {
      //// console.log('incorrect key detected');
      //TODO update records here
      this.wastedKeys ++;
      this.currentErrors++;
      this.misTyped.push(correctChar);
      // set error state to true, check if in barrier state, log location of error
      this.errorState = true;
      this.errorIndex = this.activeCharIndex;
      this.errorState > this.maxCharsFromError ? this.barrierState = true : this.barrierState = false;

      this.updateComponents('incorrect');
      return;
    }

    //Case 3: forward error state
    if (this.errorState > 0 && this.barrierState === false && inputKey !== 'Backspace') {
      this.wastedKeys++;
      //did we reach the maximum allowed chars from the error? 
      if (this.errorState > this.maxCharsFromError) {
        //if so prevent userfrom doing anything but backspace
        this.barrierState = true;
        this.updateComponents('forward-barrier-state');
        return;
      }
      this.errorState = this.errorState + 1;
      this.updateComponents('forward-error-state');
      return;
    }


    //Case 4: forward barrier state
    if (this.barrierState === true && inputKey !== 'Backspace') {
      this.wastedKeys ++;
      return;

    }

    //Case 5: backspace normal
    if (inputKey === 'Backspace' && this.errorState < 1 && this.barrierState === false) {
      //// console.log('backspace norma');
      this.wastedKeys ++;
      this.updateComponents('backspace-normal');
      return;
    }
    //Case 6: backspace error state
    if (inputKey === 'Backspace' && (this.errorState > 0 || this.barrierState === true)) {
      //// console.log('backspace error state');
      this.wastedKeys ++;
      //reduce this.errorState Count, make barrier state false
      this.errorState = this.errorState - 1;
      this.barrierState = false;
      //if reached the error, remove the error index value
      if (this.activeCharIndex <= this.errorIndex) this.errorIndex = null;
      this.updateComponents('backspace-error-state');
      return;

    }

    console.log('error, detectkeypresstype did not catch that behaviour');

  }

    Main();
    return (
        <div></div>
    );
}