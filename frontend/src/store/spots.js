
const LOAD_SPOTS = 'spots/LOAD_SPOTS'

//Action creator for loading spots
export const loadSpots = (spots) => {
    console.log("spots: ", spots)
    return ({
        type: LOAD_SPOTS,
        spots
    })
}

//thunk action creators
export const getAllSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');

    if (response.ok) {
        const data = await response.json()
        dispatch(loadSpots(data))
        console.log("data: ", data)
        return data //check if this is necessary
    }
}

//reducer
export const spotsReducer = (state = {}, action) => {
    console.log("we are in spots reducer ! ")
    switch (action.type) {
        case LOAD_SPOTS: {
            const newState = {};
            action.spots.Spots.forEach((spot) => {
                newState[spot.id] = spot;
            })
            console.log("newState after reducer: ", newState)
            return newState;
        }
        default:
            return state
    }
}
