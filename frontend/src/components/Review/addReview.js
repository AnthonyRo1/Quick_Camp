import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createReview} from '../../store/reviews';
import './Review.css'

// review 
// userId
// campsiteId 
const AddReview = ({campsiteId, userId}) => {
  const dispatch = useDispatch();
  const [review, setReview] = useState('');


  const updateReview = (e) => setReview(e.target.value);


  const handleSubmit = async(e) => {
      e.preventDefault();

      const payload = {
        review,
        userId,
        campsiteId
      }

      let createdReview;

      createdReview = dispatch(createReview(payload))
      setReview('');
  }

  return (
    <form className='ri-container' onSubmit={handleSubmit}>
      <div className='ri-txt-container'>
        <span id='review-txt'>Add a Review</span>
        <textarea id='ri-txtarea'
        value={review}
        onChange={updateReview}
        ></textarea>
      </div>
      <button className='ri-create-btn'>
        <i className="fas fa-plus"></i>
      </button>
    </form>
  )
}


export default AddReview;