
import TypingInputReducer from './slices/TypingInput.js';
import CurrentViewReducer from './slices/CurrentView.js';
import ContainerComponentRunCountersReducer from './slices/ContainerComponentRunCounters';
import ContainerComponentTriggersReducer from './slices/ContainerComponentTriggers.js';
//add new imports above this line
//! do not delete comment above, used for newSlice script

import queryTestResultReducer from '../components/query-tester/queryTesterSlice';
import IsLoggedInReducer from './slices/IsLoggedIn.js';
import IsPausedReducer from './slices/IsPaused.js';
import CurrentTTTReducer from './slices/CurrentTTT.js';
import CurrentTrainingModeReducer from './slices/CurrentTrainingMode.js';
import AllTrainingModesReducer from './slices/AllTrainingModes.js';
import CurrentUserReducer from './slices/CurrentUser.js';
import CurrentStatsReducer from './slices/CurrentStats.js';
import CurrentTTTSettings from './slices/CurrentTTTSettings.js';

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    queryTestResult: queryTestResultReducer,
    IsLoggedIn: IsLoggedInReducer,
    IsPaused: IsPausedReducer,
    CurrentTTT: CurrentTTTReducer,
    CurrentTrainingMode: CurrentTrainingModeReducer,
    AllTrainingModes: AllTrainingModesReducer,
    CurrentUser: CurrentUserReducer,
    CurrentStats: CurrentStatsReducer,
    CurrentTTTSettings: CurrentTTTSettings,
    TypingInput: TypingInputReducer,
         CurrentView: CurrentViewReducer,
         ContainerComponentRunCounters: ContainerComponentRunCountersReducer,
         ContainerComponentTriggers: ContainerComponentTriggersReducer,
//add new slices above this line
//! do not delete above comment, necessary for newSlice bash script
  },
});
