import { NavigationExperimental } from 'react-native'
import {
    NAVIGATION_PUSH,
    NAVIGATION_POP
} from '../actions/index.js'

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
    index: 0,
    key: 'App',
    routes: [{key: 'Home'}]
}

const navigationReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAVIGATION_PUSH:
            return NavigationStateUtils.push(state, {key: action.key})
        case NAVIGATION_POP:
            return state.index > 0 ? NavigationStateUtils.pop(state) : state
        default:
            return state
    }
}

export default navigationReducer


