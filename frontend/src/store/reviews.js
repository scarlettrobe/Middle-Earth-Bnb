
//action type constants
export const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

//action creators

export const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
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
        default:
            return state
    }
}
