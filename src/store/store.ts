import { configureStore } from '@reduxjs/toolkit';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './sagas';

/**
 * @param {Array} reducer - combined reducers
 * @param {Array} saga - combined sagas
 * @param {Array} middlewares - middlewares
 * @returns {Object} - store
 */


const initialState = {};
const sagaMiddleware = createSagaMiddleware();

/**
   * @returns {Array} - middleware
   */
const switchMode = () => {
  if (process.env.NODE_ENV === 'development') {
    return [sagaMiddleware, createLogger];
  }

  return [sagaMiddleware];
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(switchMode()),            // CAN BE CONCATED JUST sagaMiddleware
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(saga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
