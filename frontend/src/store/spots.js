
export const LOAD_SPOTS = 'spots/LOAD_SPOTS'
export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT'

//Action creator for loading spots
export const loadSpots = (spots) => {
    return ({
        type: LOAD_SPOTS,
        spots
    })
}

export const receiveSpots = (spot) => {

    return ({
        type: RECEIVE_SPOT,
        spot
    })
}

//thunk action creators
export const getAllSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');

    if (response.ok) {
        const data = await response.json()
        dispatch(loadSpots(data))
        return data //check if this is necessary
    }
}

export const getSingleSpot = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(receiveSpots(data))
        return data
    } else {
        console.log("error in getting spot")
    }
}

//reducer
export const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_SPOTS: {
            const newState = {};
            action.spots.Spots.forEach((spot) => {
                newState[spot.id] = spot;
            })
            return newState;
        }
        case RECEIVE_SPOT: {
            return { [action.spot.id]: action.spot }
        }
        default:
            return state
    }
}
