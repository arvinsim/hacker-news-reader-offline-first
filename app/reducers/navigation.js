import { NavigationExperimental } from 'react-native'
import {
    NAVIGATE_TO_HN_STORY_DETAILS,
    NAVIGATE_TO_HOME
} from '../actions/index.js'

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
    index: 0,
    routes: [
        {key: 'Home'}
    ]
}

const navigationReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAVIGATE_TO_HN_STORY_DETAILS:
            const route = { key: action.payload.key }
            return NavigationStateUtils.push(state, route)
        case NAVIGATE_TO_HOME:
            return state.index > 0 ? NavigationStateUtils.pop(state) : state
        default:
            return state
    }
}

export default navigationReducer


