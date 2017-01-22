import { fetchStories } from '../lib/api.js'

// Actions
export const REQUEST_STORIES = 'REQUEST_STORIES'
export const NAVIGATE_TO_HN_STORY_DETAILS = 'NAVIGATE_TO_HN_STORY_DETAILS'
export const NAVIGATE_TO_HOME = 'NAVIGATE _TO_HOME'

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

export function navigateToHNStoryDetails() {
    return {
        type: NAVIGATE_TO_HN_STORY_DETAILS,
        payload: {
            key: 'HNStoryDetails'
        }
    }
}

export function navigateToHome() {
    return {
        type: NAVIGATE_TO_HOME,
        payload: {
            key: 'Home'
        }
    }
}
