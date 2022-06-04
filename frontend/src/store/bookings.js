import { csrfFetch } from "./csrf";

const GET_BOOKINGS = 'bookings/getBookings';
const ADD_BOOKING = 'bookings/addBooking';
const REMOVE_BOOKING = 'bookings/removeBooking';
const EDIT_BOOKING = 'bookings/editBooking';



const addOneBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    booking
  }
};

const getAllBookings = (bookings) => {
  return {
    type: GET_BOOKINGS,
    bookings
  }
}

const removeOneBooking = (id) => {
  return {
    type: REMOVE_BOOKING,
    id
  }
}

const updateOneBooking = (booking) => {
  return {
    type: EDIT_BOOKING,
    booking
  }
}




export const getBookings = () => async dispatch => {
  const res = await csrfFetch('/api/bookings');

  if (res.ok) {
    const bookings = await res.json();
    dispatch(getAllBookings(bookings))
  }
}


export const createBooking = (data) => async dispatch => {
  const res = await csrfFetch('/api/bookings', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const booking = await res.json();
    
   await dispatch(addOneBooking(booking));
   await dispatch(getBookings());
    return booking;
  }
}


export const updateBooking = (id, data) => async dispatch => {
  const res = await csrfFetch(`/api/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (res.ok) {
    const booking = await res.json();
    const {id} = booking;
    dispatch(updateOneBooking(booking))
    dispatch(getBookings())
    return booking;
  }
}


export const removeBooking = (id) => async dispatch => {
  const res = await csrfFetch(`/api/bookings/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const deletedBooking = await res.json();
    await dispatch(removeOneBooking(id))
    await dispatch(getBookings())
     return deletedBooking;
  }
}



export default function bookingsReducer(state = {}, action) {
  let newState = {}
  switch(action.type) {
    case GET_BOOKINGS:
      newState = {...state}
      action.bookings.forEach(item => {
        newState[item.id] = item;
      })
      return newState
    case ADD_BOOKING: 
      if (!state[action.booking.id]) {
        const newState = {
          ...state,
          [action.booking.id]: action.booking,
        };
        return newState;
      }
    case EDIT_BOOKING: 
      return {
        ...state,
        [action.booking.id]: action.item
      };
    case REMOVE_BOOKING: 
      newState = {...state};
      delete newState[action.id];
      return newState;
      default: 
        return state;
  }
}