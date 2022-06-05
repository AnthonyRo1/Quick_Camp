import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {updateBooking} from '../../store/bookings'


const BookingEdit = ({campsiteId, userId, id}) => {
  const [form, setForm] = useState(true);
  const toggleForm = () => {
    setForm(!form);
  }

  const dispatch = useDispatch();
  const campsites = useSelector(state => state.campsites);
  // const sessionUser = useSelector(state => state.session.user);
  // const userId = sessionUser.id;
  // console.log(userId)
  const campsite = campsites[campsiteId];

  // get current date + tomorrow's date 
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const dateTmrw = tomorrow.toISOString().split('T')[0];
  const dateToday = today.toISOString().split('T')[0];
  // get current date + tomrrow's date



  const dayAhead = (checkIn) => {
    const nextDay = new Date(checkIn);
    nextDay.setDate(nextDay.getDate() + 2);

    const dateNext = nextDay.toISOString().split('T')[0];
    return dateNext
  }



  const daysBetween = (date_1, date_2) => {
    date_1 = new Date(date_1);
    date_2 = new Date(date_2);
    let difference = date_2.getTime() - date_1.getTime()
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays
  }


  const convertDate = (date) => {
    const toDate = new Date(date);
    const converted = toDate.toISOString().split('T')[0];
    return converted;
  }


  const [checkIn, setCheckIn] = useState(dateToday);
  const [checkout, setCheckout] = useState(dateTmrw);
  const [numAdults, setNumAdults] = useState('');
  const [numChildren, setNumChildren] = useState('');
  const [totalCost, setTotalPrice] = useState(0)
  // const [totalDays, setTotalDays] = useState(1);
  // const [displayPrice, setDisplayPrice] = useState(campsite?.pricePerNight);
  const [totalGuests, setTotalGuests] = useState(0);



  const updateCheckIn = (e) => {
    setCheckIn(convertDate(e.target.value));
  }

  const updateCheckout = (e) => {
    setCheckout(convertDate(e.target.value));
  }

  const updateAdults = (e) => {
    setNumAdults(e.target.value);
  }

  const updateChildren = (e) => {
    setNumChildren(e.target.value);
  }




  useEffect(() => {
    setTotalPrice(Number(daysBetween(checkIn, checkout)) * Number(campsite?.pricePerNight));

    setTotalGuests(Number(numAdults) + Number(numChildren));
  }, [updateAdults, updateChildren, updateCheckIn, updateCheckout])




  const handleSubmit = async (e) => {
    e.preventDefault();


    let checkOut = checkout;
    
    const payload = {
      checkIn,
      checkOut,
      totalGuests,
      userId,
      campsiteId,
      totalCost
    }
    console.log(payload)
      dispatch(updateBooking(id, payload))
      setForm(!form);
  }



  return (
      <>
      { form && <form className='booking-edit-form' onSubmit={handleSubmit}>
        <div className='be-ci-input'>
        <span>Check in</span>
        <input 
        type='date'
        value={checkIn}
        onChange={updateCheckIn}
        ></input>
        </div>
        <div className='be-co-input'>
        <span>Check out</span>
        <input 
        type='date'
        min={dateTmrw}
        value={new Date(checkIn) >= new Date(checkout) ? setCheckout(dayAhead(checkout)) : checkout}
        onChange={updateCheckout}
        ></input>
        </div>
        <div className='be-adult-input'>
      <span>Adults</span>
        <input 
        type='number'
        value={numAdults}
        onChange={updateAdults}
        ></input>
        </div>
        <div className='be-child-input'>
        <span>Children</span>
        <input 
        type='number'
        value={numChildren}
        onChange={updateChildren}
        ></input>
        </div>
        <button id='bf-edit' type='submit'>Submit Changes</button>
        <button id='bf-cancel' type='button' onClick={toggleForm}>Cancel</button>
      </form>}
    </>
  )
}


export default BookingEdit;