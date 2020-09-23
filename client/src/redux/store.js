import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
//import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

//import { fetchCollectionsStart } from '../redux/shop/shop.sagas';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

//const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
