import { csrfFetch } from "./csrf";

const GET_CAMPSITES = 'campsites/getCampsites';
const ADD_CAMPSITE = 'campsites/addCampsite';
const EDIT_CAMPSITE = 'campsites/editCampsite';


export const getAllCampsites = (campsites) => {
  return {
    type: GET_CAMPSITES,
    campsites
  }
}

const addOneCampsite = (campsite) => {
  return {
    type: ADD_CAMPSITE,
    campsite
  }
}

const editOneCampsite = (campsite) => {
  return {
    type: EDIT_CAMPSITE,
    campsite
  }
}

export const getCampsites = () => async dispatch => {
  const res = await csrfFetch('/api/campsites')

  if (res.ok) {
    const campsites = await res.json();
    dispatch(getAllCampsites(campsites))
  }
}




export const createCampsite = (data) => async dispatch => {
  const res = await csrfFetch('/api/campsites', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });


  if (res.ok) {
    const campsite = await res.json();
    console.log(campsite);

    dispatch(addOneCampsite(campsite));
    return campsite;
  }
}


export const editCampsite = (id, data) => async dispatch => {
  const res = await csrfFetch(`/api/campsites/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const campsite = await res.json();
    
    dispatch(editOneCampsite(campsite));
    return campsite;
  }
}



export default function campsitesReducer(state = {}, action) {
  let newState = {}
  switch (action.type) {
    case (GET_CAMPSITES):
        newState = {...state}
      action.campsites.forEach(item => {
        newState[item.id] = item
      })
      return newState
    case ADD_CAMPSITE:
      if (!state[action.campsite.id]) {
        const newState = {
          ...state,
          [action.campsite.id]: action.campsite,
        };
        return newState;
      }
      case EDIT_CAMPSITE:
           newState = {
          ...state,
        };
        newState[action.campsite.id] = action.campsite;
        return newState
    default:
      return state;
  }
}