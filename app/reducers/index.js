import { combineReducers } from 'redux'
import generalReducer from './general.js'

const rootReducer = combineReducers({
    general: generalReducer
})

export default rootReducer