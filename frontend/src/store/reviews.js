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

    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)

    if (response.ok) {
        const data = await response.json()
        dispatch(loadReviews(data))
        return data
    } else {
        console.log("get all reviews failed. :")
    }
}

export const createReview = (review, spotId) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json()
        console.log("RESPONSE ", data)
        dispatch(postReview(data))
        return data
    } else {
        console.log("Fetching data failed. :")
    }
}


//create a reducer
export const reviewsReducer = (state = {}, action) => {
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
