import { csrfFetch } from "./csrf"


//action type constants
export const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
export const POST_REVIEW = 'reviews/POST_REVIEW'

//action creators

export const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})
export const postReview = (review) => ({
    type: POST_REVIEW,
    review
})

//thunk action creators

export const getAllReviews = (spotId) => async (dispatch) => {

    const response = await fetch(`/api/spots/${spotId}/reviews`)

    if (response.ok) {
        const data = await response.json()
        dispatch(loadReviews(data))
        return data
    } else {
        console.log("grabbing data failed T-T")
    }
}

export const createReview = (review, spotId) => async (dispatch) => {
    console.log("Inside the createReview thunk: ", review)
    console.log("Spot ID inside the createReview thunk: ", spotId)
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json()
        console.log("This is the response data we received from the fetch: ", data)
        dispatch(postReview(data))
        return data
    } else {
        console.log("Fetching data failed. :")
    }
}


//create a reducer
export const reviewsReducer = (state = {}, action) => {
    console.log("Inside the reducer state: ", state)
    console.log("Inside the reducer action: ", action)
    switch (action.type) {
        case LOAD_REVIEWS: {
            const newState = {}
            action.reviews.Reviews.forEach((review) => {
                newState[review.id] = review;
            })

            return newState;
        }
        case POST_REVIEW: {
            return { ...state, [action.review.id]: action.review }
        }
        default:
            return state
    }
}
