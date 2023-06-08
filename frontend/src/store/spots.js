import { csrfFetch } from "./csrf";

export const LOAD_SPOTS = 'spots/LOAD_SPOTS';
export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT';
export const ADD_SPOT = 'spots/ADD_SPOT';
export const ADD_SPOT_IMAGE = 'spots/ADD_SPOT_IMAGE';
export const GET_CURRENT_SPOTS = 'spots/GET_CURRENT_SPOTS';
export const RESET_CURRENT_USER_SPOTS = 'spots/RESET_CURRENT_USER_SPOTS';
export const UPDATE_SPOT = 'spots/UPDATE_SPOT';
export const DELETE_SPOT = 'spots/DELETE_SPOT';

export const loadSpots = (spots) => ({
  type: LOAD_SPOTS,
  spots
});

export const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot
});

export const addSpot = (spot) => ({
  type: ADD_SPOT,
  spot
});

export const addSpotImage = (image) => ({
  type: ADD_SPOT_IMAGE,
  image
});

export const getCurrentSpots = (spots) => ({
  type: GET_CURRENT_SPOTS,
  spots
});

export const resetCurrentUserSpots = () => ({
  type: RESET_CURRENT_USER_SPOTS
});

export const updateSpot = (spot) => ({
  type: UPDATE_SPOT,
  spot
});

export const deleteSpot = (spotId) => ({
  type: DELETE_SPOT,
  spotId
});

export const getAllSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadSpots(data.spots));
  }
};

export const getCurrentUserSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots/current');

  if (response.ok) {
    const data = await response.json();
    dispatch(getCurrentSpots(data.spots));
    return data;
  } else {
    const data = await response.json();
    return data;
  }
};

export const getSingleSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(receiveSpot(data.spot));
    return data;
  } else {
    console.log("Error in getting spot");
  }
};

export const modifySpot = (spotId, spotData) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(spotData)
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateSpot(data));
    return data;
  } else {
    const data = await response.json();
    console.log("Error in updating spot:", data);
    throw new Error(data.message || "Error in updating spot");
  }
};

export const removeSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(deleteSpot(spotId));
    return spotId;
  } else {
    console.log("Error in deleting spot");
  }
};

export const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS: {
      const newState = { ...state };
      action.spots.Spots.forEach((spot) => {
        newState[spot.id] = spot;
      });
      return newState;
    }
    case RECEIVE_SPOT: {
      return { ...state, [action.spot.id]: action.spot };
    }
    case ADD_SPOT: {
      return { ...state, [action.spot.id]: action.spot };
    }
    case ADD_SPOT_IMAGE: {
      const newState = { ...state };
      newState[action.image.spotId].images.push(action.image);
      return newState;
    }
    case GET_CURRENT_SPOTS: {
      const newState = { ...state, allSpots: { ...state.allSpots }, currentUserSpots: {} };
      action.spots.Spots.forEach((spot) => {
        newState.currentUserSpots[spot.id] = spot;
      });
      return newState;
    }
    case RESET_CURRENT_USER_SPOTS: {
      return { ...state, allSpots: { ...state.allSpots }, currentUserSpots: {} };
    }
    case UPDATE_SPOT: {
      return { ...state, [action.spot.id]: action.spot };
    }
    case DELETE_SPOT: {
      const newState = { ...state };
      delete newState[action.spotId];
      return newState;
    }
    default:
      return state;
  }
};
