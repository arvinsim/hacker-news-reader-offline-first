import { hackerNewsApiEndpoints } from '../config/api.js'

// Actions
export const REQUEST_STORIES = 'REQUEST_STORIES'

// Action Creators
export function requestStories() {
    return function(dispatch) {
        fetch(hackerNewsApiEndpoints.frontPageStories)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const stories = data.hits.map((story) => {
                    return {
                        title: story.title,
                        url: story.url,
                        score: story.points,
                        time: story.created_at_i,
                        by: story.author,
                        descendants: story.num_comments
                    }
                })

                dispatch({
                    type: REQUEST_STORIES,
                    payload: {
                        stories: stories
                    }
                })
            })

        /*
        fetch(hackerNewsApiEndpoints.newStories).then((response) => {
            const story = {
                "by": "dhouston",
                "descendants": 71,
                "id": 8863,
                "kids": [8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876],
                "score": 111,
                "time": 1175714200,
                "title": "My YC app: Dropbox - Throw away your USB drive",
                "type": "story",
                "url": "http://www.getdropbox.com/u/2/screencast.html"
            }

            dispatch({
                type: REQUEST_STORIES,
                payload: {
                    stories: [
                        story,
                        story,
                        story,
                        story,
                        story,
                        story,
                        story
                    ]
                }
            })
        })
        */
    }
}