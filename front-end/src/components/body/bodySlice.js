import { createSlice } from '@reduxjs/toolkit';

export const bodySlice = createSlice({
  name: 'body',
  initialState: {
    content: 'example content handled by redux store',
  },
  reducers: {
    changeContent: (state,action) => {
        state.value = action.payload;
    },
  },
});

export const { changeContent } = bodySlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const changeContentAsync = newContent => dispatch => {
  setTimeout(() => {
    dispatch(changeContent(newContent));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectContent = state => state.body.value;

export default bodySlice.reducer;