import createReducer from '../../utils/createReducer';
import { browserHistory } from 'react-router';

const localStorage = window.localStorage || {};
// initial state before request data from server
const initialState = {
  token: localStorage.token,
};

// Work with promise middleware
// See in /app/redux/middleware/promise.js
export default createReducer({
  ['POST_LOGIN_REQUEST']: (state, { payload }) => ({ // set empty array on request
    ...state,
    ...initialState,
  }),

  ['POST_LOGIN_SUCCESS']: (state, { payload }) => ({ // get tasks from server
    ...state,
    ...payload,
  }),

  ['POST_LOGIN_FAILURE']: (state, { payload }) => ({ // get tasks from server
    ...state,
  }),
    
  // ['POST_LOGIN_FAILURE']: (state, { payload }) => // error from server
  //   console.log('error'),

  ['POST_LOGOUT_REQUEST']: (state, { payload }) => ({ // set empty array on request
    ...state,
  }),

  ['POST_LOGOUT_SUCCESS']: (state, { payload }) => ({ // get tasks from server
    ...state,
    token: null,
  }),

  ['POST_LOGOUT_FAILURE']: (state, { payload }) => // error from server
    console.log('error'),
}, initialState);

// Work with api middleware (will generate request promise).
// See in /app/redux/middleware/api.js
export const apiPostLogin = (data) => ({
  mode: 'POST', // GET, POST
  type: 'POST_LOGIN', // see: createReducer in this file
  url: 'auth', // => api/auth (see in /api/routes/auth.js)
  data: data,
  onSuccess: (res, dispatch) => {
    // Callback on success
    // If the user was authenticated successfully, save a random token to the
    try {
      const result = JSON.parse(res.text);
      localStorage.setItem('token', result.token);
      browserHistory.push('/tasks');
    } catch (error) {}

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
  onFailure: (res, dispatch) => {
    // Callback on failure

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
});

export const apiPostLogout = () => ({
  mode: 'POST', // GET, POST
  type: 'POST_LOGOUT', // see: createReducer in this file
  url: 'logout', // => api/auth (see in /api/routes/auth.js)
  data: {},
  onSuccess: (res, dispatch) => {
    // Callback on success
    localStorage.removeItem('token');
    browserHistory.push('/');

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
  onFailure: (res, dispatch) => {
    // Callback on failure

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
});
