import { csrfFetch } from "./csrf";

const GET_CAMPSITES = 'campsites/getCampsites';

export const getAllCampsites = (campsites) => {
  return {
    type: GET_CAMPSITES,
    campsites
  }
}


export const getCampsites = () => async dispatch => {
  const res = await csrfFetch('/api/campsites')

  if (res.ok) {
    const campsites = await res.json();
    dispatch(getAllCampsites(campsites))
  }
}


export const addCampsite = (data) => async dispatch => {
  const res = await fetch('/api/campsites', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

export default function campsitesReducer(state = {}, action) {
  switch (action.type) {
    case (GET_CAMPSITES):
      const newState = {...state}
      action.campsites.forEach(item => {
        newState[item.id] = item
      })
      return newState
    default:
      return state;
  }
}