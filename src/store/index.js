import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  count: 1,
};

const reducer = (state = initialState) => {
  return state;
};

const store = configureStore({
  reducer: reducer,
});

export default store;
