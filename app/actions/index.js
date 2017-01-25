import { fetchStories } from '../lib/api.js'

import store from '../config/store.js'
import router from '../config/router.js'

// Actions
export const REQUEST_STORIES = 'REQUEST_STORIES'

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

export function goToHome(navigator) {
    navigator.popToTop()
}

export function goToDetails(navigator, story) {
    const data = { details: story }
    navigator.push(router.getRoute('details', data)) 
}