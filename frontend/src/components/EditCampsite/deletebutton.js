  import { useHistory } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import {useState} from 'react';
  import { removeCampsite } from '../../store/campsites';
  import { removeReview } from '../../store/reviews';
  import './EditCampsite.css';


const DeleteButton = ({campsiteId}) => {
  
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);
  const allReviews = Object.values(reviews);

  const matchedReviews = allReviews.filter(review => review?.campsiteId === campsiteId)
  console.log(matchedReviews)
  const history = useHistory();
  const [confirm, setConfirm] = useState(false);

  const toggleConfirm = () => {
      setConfirm(!confirm);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (matchedReviews.length > 0) {
       matchedReviews.map((review )=> {
       dispatch(removeReview(review?.id))
       }).then(console.log('hello'))
    }

    await dispatch(removeCampsite(campsiteId));
    await history.push('/')
  }


  return (
    <div className='ef-delete-container'>
      <div className='ef-delete-btn'>
        <span id='ef-d-text' onClick={toggleConfirm}>Delete</span>
      </div>
      { confirm && 
          <form className='ef-confirm-box' onSubmit={handleSubmit}>
            <span id='ef-c-text'>Are you sure you want to delete this campsite?</span>
          <div className='ef-final-confirm'>
              <button type='submit' id='ef-yes'>Yes</button>
              <button onClick={toggleConfirm} type='button' id='ef-no'>No</button>
              </div>
          </form> 
       }
    </div>
  )
}


export default DeleteButton;