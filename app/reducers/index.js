import { NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers } from 'redux'
import generalReducer from './general.js'

const rootReducer = combineReducers({
    general: generalReducer,
    navigation: NavigationReducer
})

export default rootReducer