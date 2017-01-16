import { REQUEST_STORIES } from '../actions/index.js'

const initialState = {
    stories: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_STORIES:
            return Object.assign({}, state, {
                stories: action.payload.stories
            })
        default:
            return state
    }
}

export default rootReducer;