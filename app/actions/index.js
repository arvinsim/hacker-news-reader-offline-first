import { fetchStories } from '../lib/api.js'

// Actions
export const REQUEST_STORIES = 'REQUEST_STORIES'
export const NAVIGATION_PUSH = 'NAVIGATION_PUSH'
export const NAVIGATION_POP = 'NAVIGATION_POP'

// Action Creators
export function requestStories() {
    return (dispatch) => {
        return fetchStories()
            .then((stories) => {
                return dispatch({
                    type: REQUEST_STORIES,
                    payload: {
                        stories: stories
                    }
                })
            }).catch((error) => {
                console.log(error)
                return Promise.reject(error)
            })
    }
}
