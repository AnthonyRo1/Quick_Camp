import { useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Booking from './booking';

import './Bookings.css';

const Bookings = () => {
  // use selector will be used to get all current bookings
  const history = useHistory();
  const Allbookings = useSelector(state => state.bookings);
  const user = useSelector(state => state.session.user);
  const userId = user.id;

  
  const totalBookings = Object.values(Allbookings).reverse();

  const bookings = totalBookings.filter(booking => booking?.userId == userId);



  // you will loop through all bookings to render each individual booking


  return (
    <div className='bookings-container'>
      { bookings.length > 0 &&
        bookings.map((booking, i) => (
          <Booking 
          key={i}
          checkIn={booking.checkIn} 
          checkOut={booking.checkOut} 
          userId={booking.userId} 
          totalCost={booking.totalCost}
          totalGuests={booking.totalGuests}
          id={booking.id}
          campsiteId={booking.campsiteId}
          /> 
        ))
      }
      {
        bookings.length === 0 && 
        <div>No bookings available.</div>
      }
    </div>
  )
}

export default Bookings