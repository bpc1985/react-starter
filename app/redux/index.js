import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import app from './modules/app/app';

const rootReducer = combineReducers({
  reduxAsyncConnect,
  app,
});

export default rootReducer;
