import {NavLink} from 'react-router-dom';
import './Navigation.css';

const BookingsButton = () => {
  return (
    <div className='bookings-button-container'> 
      <NavLink className='nav-link-bk'to='/bookings'>
      <button id='bks-btn'>
        <i className="fas fa-book"></i>
      </button>
      </NavLink>
      <span id='bks-btn-text'>Active Bookings</span>
      
    </div>
  )
}


export default BookingsButton;