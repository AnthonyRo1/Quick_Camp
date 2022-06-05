import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'reviews/getReviews';
const ADD_REVIEW = 'reviews/addReview';
const EDIT_REVIEW = 'reviews/editReview';
const REMOVE_REVIEW = 'reviews/removeReview';



 const getAllReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews
  }
};


  const addOneReview = (review) => {
    return {
      type: ADD_REVIEW,
      review
    }
  };


  const editOneReview = (review) => {
    return {
      type: EDIT_REVIEW,
      review
    }
  };


  const removeOneReview = (reviewId) => {
    return {
      type: REMOVE_REVIEW,
      reviewId
    }
  }



  export const getReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews')

    if (res.ok) {
      const reviews = await res.json();
      dispatch(getAllReviews(reviews));
    }
  };


  export const createReview = (data) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });


    if (res.ok) {
      const review = await res.json();

      dispatch(addOneReview(review));
      return review;
    }
  };



  export const editReview = (id, data) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      const review = await res.json();

      dispatch(editOneReview(review));
      return review;
    }
  };



  export const removeReview = (id) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      const {id: removedId} = await res.json();
      dispatch(removeOneReview(removedId));
      return removedId;
    }
  }

  export const removeMany = (id) => async dispatch => {
    const res = await csrfFetch()
  }


  export default function reviewsReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
      case (GET_REVIEWS): 
        newState = {...state}
        action.reviews.forEach(item => {
          newState[item.id] = item
        });
        return newState
      case ADD_REVIEW:
        if (!state[action.review.id]) {
          const newState = {
            ...state,
            [action.review.id]: action.review,
          };
          return newState;
        };
        case EDIT_REVIEW:
          newState ={
            ...state,
          };
          newState[action.review.id] = action.review; 
          return newState;
          case REMOVE_REVIEW: 
          newState = {
            ...state,
          };
          delete newState[action.reviewId];
          return newState;
          default: 
          return state;
    }
  }





