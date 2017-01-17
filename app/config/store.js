import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import rootReducer from '../reducers/index.js'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(
    rootReducer,
    applyMiddleware(thunk),
    autoRehydrate()
);
persistStore(store, { storage: AsyncStorage })

export default store;