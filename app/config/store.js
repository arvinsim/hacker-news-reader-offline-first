import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from '../reducers/index.js'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;