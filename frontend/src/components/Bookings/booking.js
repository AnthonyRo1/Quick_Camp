import {useSelector, useDispatch} from 'react-redux';
import BookingEdit from './bookingedit';
import {useState, useEffect} from 'react';
import {removeBooking, getBookings} from '../../store/bookings'
import {useHistory} from 'react-router-dom';

//each booking will receive props, the props will be the data that you fill in for each individual booking 


const Booking = ({checkIn, checkOut, id, userId, campsiteId, totalCost, totalGuests}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const campsites = useSelector(state => state.campsites);
  const campsite = campsites[campsiteId];
  const [editForm, setEditForm] = useState(false);
  const handleDelete = async (e) => {
    e.preventDefault();

  const deletedBooking =  await dispatch(removeBooking(id))
    dispatch(getBookings())
    history.push('/bookings');
  }

  const toggleBookingForm = (e) => {
    e.preventDefault();
    setEditForm(!editForm);
  }
  const convertDate = (date) => {
    const toDate = new Date(date);
    const converted = toDate.toISOString().split('T')[0];
    return converted;
  }

  const checkInDate = convertDate(checkIn);
  const checkOutDate = convertDate(checkOut);
  const campName = campsite?.name;

  return (
    <div className='bf-form-container'>
    <form className='ab-single-container' onSubmit={toggleBookingForm}>
      <div className='ab-camp-name'>
          <span id='ab-camp-text'>{campName}</span>
      </div>
      <div className='dates-container'>
      <div id='dc-ci-box'>
          <span className='dc-label'>Check In:</span>
        <span className='dc-date-text'>{checkInDate}</span>
      </div>
      <div id='dc-co-box'>
          <span className='dc-label'>Check Out:</span>
        <span className='dc-date-text'>{checkOutDate}</span>
      </div>
      </div>
      <div className='ab-guests-container'>
        <span id='ab-guests-text'>Total Guests: {totalGuests}</span>
      </div>
      <div className='ab-price-container'>
          <span id='ab-price-text'>Total Price: ${totalCost}</span>
      </div>
      <div className='edit-booking-btn'>
          <button type='submit' id='update-btn-bk'>Edit</button>
        <button type='button'id='delete-btn-bk' onClick={handleDelete}>Delete</button>
      </div>
      </form>
      {editForm && <BookingEdit campsiteId={campsiteId} userId={userId} id={id}/>}
    </div>
 
  )
}

export default Booking;