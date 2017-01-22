import { combineReducers } from 'redux'
import navigationReducer from './navigation.js'
import generalReducer from './general.js'

const rootReducer = combineReducers({
    navigation: navigationReducer,
    general: generalReducer
})

export default rootReducer