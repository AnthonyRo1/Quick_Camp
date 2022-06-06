import {useSelector, useDispatch} from 'react-redux';
import { getUser } from '../../store/session';
import { useState, useEffect } from 'react';
import { csrfFetch } from '../../store/csrf';
import { removeReview } from '../../store/reviews';
import {editReview} from '../../store/reviews'
import {useHistory} from 'react-router-dom';


import './Review.css'


const Review = ({review, date, userId, campsiteId, reviewId}) => {


  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const seshId = sessionUser?.id;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await csrfFetch(`/api/session/${userId}`)
      const data = await res.json();
      setUser(data);
    }
    fetchData().catch(error => console.log(error));
  }, []);





const [form, setForm] = useState(false);
const [newReview, setNewReview] = useState('');


  const deleteReview = async () => {
    const deletedReview = await dispatch(removeReview(reviewId));
  }

  const updateReview = (e) => setNewReview(e.target.value);

  const toggleForm = () => {
    console.log(reviewId)
    return setForm(!form);
  }

  const [errors, setErrors] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let err= []
    

      let review = newReview
    const payload = {
      review,
      campsiteId,
      userId,
    };
      if (review.length < 2) {
        err.push('Your review must be at least 5 characters long. Why? Because we say so.')
      } 


        setErrors(err);
      if (err.length > 0) {
          return 
      } else {
        const editedReview = await dispatch(editReview(reviewId, payload))
        setNewReview('');
        toggleForm(!form);
      }
   ;



  }




 const convertDate = (date) => {
    const toDate = new Date(date);
    const converted = toDate.toISOString().split('T')[0];
    return converted;
  }





  const newDate = convertDate(date);


  return (
    <>
    <div className='rc-review'>
      <div className='ri-s-cntr'>
        <div id='ri-s-prof'></div>
        <span id='ri-s-name'>{user && user?.username}</span>
      </div>
      <div className='ri-r-cntr'>
        <span id='ri-r-review'>{review}</span>
        <span id='ri-r-date'>{newDate}</span>
        { seshId === user?.id &&
        <div id='rev-edit-container'>
        <button id='rev-edit' onClick={toggleForm}>edit</button>
        <button id='rev-delete' onClick={deleteReview}>delete</button>
        </div>}
        {form === true && 
          <form id='edit-open-text' onSubmit={handleSubmit}>
            <span id='eo-title'>Edit Review</span>
            <div id='eo-cntr'>
              <textarea id='eo-txt' value={newReview}
              onChange={updateReview}
              ></textarea>
            </div>
            <div id='eo-btns'>
              <button type='submit' id='eo-left'>Submit</button>
              <button type='button' id='eo-right' onClick={toggleForm}>Cancel</button>
              {errors.length > 0 && <span id='edit-err'>{errors[0]}</span>}
            </div>
          </form>}
      </div>
    </div>
    </>
  )
}


export default Review;