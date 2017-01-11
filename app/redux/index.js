import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import app from './modules/app/app';
import auth from './modules/auth/auth';
import quotes from './modules/quotes/quotes';
import tasks from './modules/tasks/tasks';

const rootReducer = combineReducers({
  reduxAsyncConnect,
  app,
  auth,
  quotes,
  tasks,
});

export default rootReducer;
