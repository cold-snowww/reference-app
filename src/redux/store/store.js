import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from '../reducers/pages/pagesSlice';

const store = configureStore({
   reducer: {
      pages: pagesReducer,
   },
});

export default store;
