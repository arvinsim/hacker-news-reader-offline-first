import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createNavigationEnabledStore } from '@exponent/ex-navigation';

import rootReducer from '../reducers/index.js'

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})

const store = createStoreWithNavigation(
    rootReducer,
    applyMiddleware(thunk),
    autoRehydrate()
)
persistStore(store, { storage: AsyncStorage })

export default store