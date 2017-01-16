import { FETCH_DATA } from '../actions/index.js'

const initialState = {
    stories: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return Object.assign({}, state, {
                stories: action.payload.stories
            })
        default:
            return state
    }
}

export default rootReducer;