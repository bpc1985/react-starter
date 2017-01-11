import createReducer from '../../utils/createReducer';

// initial state before request data from server
const initialState = {
  items: null,
};

// Work with promise middleware
// See in /app/redux/middleware/promise.js
export default createReducer({
  ['GET_TASKS_REQUEST']: (state, { payload }) => ({ // set empty array on request
    ...state,
    items: null,
  }),

  ['GET_TASKS_SUCCESS']: (state, { payload }) => ({ // get tasks from server
    ...state,
    items: payload ? payload.tasks : [],
  }),

  ['GET_TASKS_FAILURE']: (state, { payload }) => // error from server
    console.log('error'),
}, initialState);

// Work with api middleware (will generate request promise).
// See in /app/redux/middleware/api.js
export const apiGetTasks = () => ({
  mode: 'GET', // GET, POST
  type: 'GET_TASKS', // see: createReducer in this file
  url: 'tasks', // => api/tasks (see in /api/routes/tasks.js)
  data: {
    testParam: 'test', // query (if GET), body (if POST) (see in /api/routes/tasks.js)
  },
  onSuccess: (res, dispatch) => {
    // Callback on success

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
  onFailure: (res, dispatch) => {
    // Callback on failure

    // We can dispatch other action
    // dispatch(OthereExampleAction)
  },
});
