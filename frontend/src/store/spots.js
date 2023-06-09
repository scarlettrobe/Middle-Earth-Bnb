import { csrfFetch } from "./csrf"


export const LOAD_SPOTS = 'spots/LOAD_SPOTS'
export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT'
export const GET_CURRENT_SPOTS = 'spots/GET_CURRENT_SPOTS'
export const UPDATE_SPOT = 'spots/UPDATE_SPOT';
export const DELETE_SPOT = 'spots/DELETE_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
const ADD_IMAGES = 'spots/ADD_IMAGES';
const RESET_SPOTS = 'spots/RESET_SPOTS';


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

export const userSpots = (spots) => {
    return ({
        type: GET_CURRENT_SPOTS,
        spots

    })
}

const addSpot = (spot) => ({
    type: ADD_SPOT,
    spot,
  });
  
  const addImages = (images) => ({
    type: ADD_IMAGES,
    images,
  });
  
  const resetSpots = () => ({
    type: RESET_SPOTS,
  });

export const updateSpot = (spot) => {
    return ({
        type: UPDATE_SPOT,
        spot
    })
}

export const deleteSpot = (spotId) => {
    return ({
        type: DELETE_SPOT,
        spotId
    })
}

//thunk action creators
export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const data = await response.json()
        dispatch(loadSpots(data))
        return data //check if this is necessary
    }
}

export const getCurrentUserSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/current')
    if (response.ok) {
        const data = await response.json()
        dispatch(userSpots(data))
        return data
    } else {
        const data = await response.json()
        return data
    }
}

export const getSingleSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(receiveSpots(data))
        return data
    } else {
        console.log("error in getting spot")
    }
}

export const modifySpot = (spotId, spotData) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(spotData)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(updateSpot(data))
        return data
    } else {
        const data = await response.json();
        console.log("Error in updating spot:", data);
        throw new Error(data.message || "Error in updating spot");
    }
}


export const removeSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatch(deleteSpot(spotId))
        return spotId
    } else {
        console.log("error in deleting spot")
    }
}

export const createSpot = (spotData) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', { // Update the URL based on your API endpoint
      method: 'POST',
      body: JSON.stringify(spotData),
    });
  
    if (response.ok) {
      const spot = await response.json();
      dispatch(addSpot(spot));
      return spot;
    }
  };
  
  export const addSpotImages = (spotId, imageUrls) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, { // Update the URL based on your API endpoint
      method: 'POST',
      body: JSON.stringify(imageUrls),
    });
  
    if (response.ok) {
      const images = await response.json();
      dispatch(addImages(images));
    }
  };
  
  export const resetCurrentUserSpots = () => (dispatch) => {
    dispatch(resetSpots());
  };


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
            return { ...state, [action.spot.id]: action.spot }
        }
        case UPDATE_SPOT: {
            return { ...state, [action.spot.id]: action.spot }
        }
        case GET_CURRENT_SPOTS: {
            const newState = { ...state, allSpots: { ...state.allSpots }, currentUserSpots: { ...state.currentUserSpots } };
            action.spots.Spots.forEach((spot) => {
                newState.currentUserSpots[spot.id] = spot;
            });
            return newState;
        }
        case DELETE_SPOT: {
            let newState = { ...state };
            delete newState[action.spotId];
            return newState;
        }
        case ADD_SPOT: {
            return { ...state, [action.spot.id]: action.spot }
        }
        case ADD_IMAGES: {
            let newState = { ...state };
            if(newState[action.images.spotId]){
                newState[action.images.spotId].images = action.images;
            }
            return newState;
        }
        case RESET_SPOTS: {
            let newState = { ...state };
            newState.currentUserSpots = {};
            return newState;
        }
        default:
            return state;
    }
}
