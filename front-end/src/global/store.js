import { configureStore } from '@reduxjs/toolkit';
import bodyReducer from '../components/body/bodySlice';
import queryTestResultReducer from '../components/query-tester/queryTesterSlice';

export default configureStore({
  reducer: {
    body: bodyReducer,
    queryTestResult: queryTestResultReducer,
  },
});
