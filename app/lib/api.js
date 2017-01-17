import { hackerNewsApiEndpoints } from '../config/api.js'

export function fetchStories() {
    return fetch(hackerNewsApiEndpoints.frontPageStories)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data.hits.map((story) => {
                return {
                    title: story.title,
                    url: story.url,
                    score: story.points,
                    time: story.created_at_i,
                    by: story.author,
                    descendants: story.num_comments
                }
            })
        })
}