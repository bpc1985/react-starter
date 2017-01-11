import createReducer from '../../utils/createReducer';

// initial state before request data from server
const initialState = {
  items: null,
};

// Work with promise middleware
// See in /app/redux/middleware/promise.js
export default createReducer({
  ['GET_QUOTES_REQUEST']: (state, { payload }) => ({ // set empty array on request
    ...state,
    items: null,
  }),

  ['GET_QUOTES_SUCCESS']: (state, { payload }) => ({ // get quotes from server
    ...state,
    items: payload.quotes,
  }),

  ['GET_QUOTES_FAILURE']: (state, { payload }) => // error from server
    console.log('error'),
}, initialState);

// Work with api middleware (will generate request promise).
// See in /app/redux/middleware/api.js
export const apiGetQuotes = () => ({
  mode: 'GET', // GET, POST
  type: 'GET_QUOTES', // see: createReducer in this file
  url: 'quotes', // => api/quotes (see in /api/routes/quotes.js)
  data: {},
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
