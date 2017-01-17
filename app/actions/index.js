import { fetchStories } from '../lib/api.js'

// Actions
export const REQUEST_STORIES = 'REQUEST_STORIES'

export const REFRESH_APP_START = 'REFRESH_APP_START'
export const REFRESH_APP_END = 'REFERSH_APP_END'

// Action Creators
export function requestStories() {
    return function (dispatch) {
        return fetchStories()
            .then((stories) => {
                dispatch({
                    type: REQUEST_STORIES,
                    payload: {
                        stories: stories
                    }
                })
            }).catch((error) => {
                Reactotron.log(error);
            })
    }
}

export function refreshAppStart() {
    return {
        type: REFRESH_APP_START
    }
}

export function refreshAppEnd() {
    return {
        type: REFRESH_APP_END
    }
}

export function refreshApp() {
    return function (dispatch) {
        return dispatch(refreshAppStart)
            .then(() => {
                return dispatch(requestStories())
            })
            .then(() => {
                dispatch(refreshAppEnd)
            })


    }
}
