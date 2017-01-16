import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index.js'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;