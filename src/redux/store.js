//store is a concept in redux flow. The middleware logger config can be viewed on redux documentaion.

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger); //add logger in dev mode.
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default { store, persistor };