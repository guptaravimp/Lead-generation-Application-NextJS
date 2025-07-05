import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice.js';

const rootReducer = combineReducers({
  theme: themeReducer,
  // add more reducers here
});

export default rootReducer; 