// Api middleware
// See in /app/redux/modules/tasks.js apiGetTasks

import request from 'superagent-bluebird-promise';
import { API_URL } from '../../constants';

const apiMiddleware = store => next => action => {
  if (action.url) {
    const authHeader = localStorage.token ? `Bearer ${localStorage.token}` : '';
    // Generate promise
    const requestPromise = action.mode === 'GET'
      ? request.get(API_URL + action.url)
        .set('authorization', authHeader)
        .query({ // add query (if get)
          ...action.data,
        })
      : request.post(API_URL + action.url)
        .set('authorization', authHeader)
        .send({ // add body (if post)
          ...action.data,
        });

    return new Promise((resolve, reject) => {
      next({
        type: action.type,
        payload: {
          promise: requestPromise
            .promise()
            .then(res => {
              if (action.onSuccess) {
                action.onSuccess && action.onSuccess(res, store.dispatch);
              }
              resolve(res);
              return res;
            })
            .catch(res => {
              const data = res.res;
              if (action.onFailure) {
                action.onFailure(data, store.dispatch);
              }

              reject(res);
              return data;
            }),
          data: { ...action.data },
        },
      });
    });
  } else {
    next(action);
  }
};

export default apiMiddleware;
