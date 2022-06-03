import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import EditButton from "../EditCampsite/editbutton";
import DeleteButton from "../EditCampsite/deletebutton";
import './Campsite.css';

const Campsite = () => {
  const {id} = useParams();
  console.log(id, 'campsiteid');
  const campsites = useSelector(state => state.campsites);
  const sessionUser = useSelector(state => state.session.user);

  const [daysStayed, setDaysStayed] = useState(1);

  const [checkIn, setCheckIn] = useState('');
  const [checkout, setCheckout] = useState('');
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)




  const campsite = campsites[id];

  // images array 
  let images = [];
  if (campsite !== undefined) {
    for (let i = 1; i <= 5; i++) {
      if (campsite[`image${i}`] !== null) {
        images.push(campsite[`image${i}`])
      }
    }
  }
  // images array 



  const [checkInDate, setCheckInDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');


  // get current date + tomorrow's date 
  const today = new Date()
  const tomorrow = new Date(today)
   tomorrow.setDate(tomorrow.getDate() + 1)
 
  const dateTmrw = tomorrow.toISOString().split('T')[0];
  const dateToday = today.toISOString().split('T')[0];
  // get current date + tomrrow's date 



  const dayAhead = (checkIn) => {
    const nextDay = new Date(checkIn);
    nextDay.setDate(nextDay.getDate() + 1);

    const dateNext = nextDay.toISOString().split('T')[0];
     return dateNext
  }

  

  // Num days between two dates 
  const daysBetween = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }
  // Num days between two dates;




  const updateCheckIn = (e) => {
    setCheckIn(e.target.value);
  }

  const updateCheckout = (e) => {
    setCheckout(e.target.value);
  }

  const updateAdults = (e) => {
    setNumAdults(e.target.value);
  }

  const updateChildren = (e) => {
    setNumChildren(e.target.value);
  }

  


  // useEffect(() => {
  //   if (daysBetween(checkIn, checkout) <= 0) {
  //     setCheckout(dayAhead(checkIn));
  //   }

  // }, [checkIn, checkout])
  
  
  



  // pseudo code 
  /* 
  Use a useSelector to find the current campsite 
  */
  let sessionEdit;
  if (sessionUser?.id === campsite?.userId) {
     sessionEdit = (
       <>
      <DeleteButton campsiteId={id} />
      <EditButton campsiteId={id}/>
      
      </>
    )
  }


  return (
    
    <div className="cs-container">
      <div className='ed-container'>
      {sessionEdit}
      </div>
      <div className='cs-i-container'>

    
        <div className='cs-images'>
            image here
        </div>
        <div className='cs-images'>

        </div>
        <div className='cs-images'>

        </div>
      </div>
      <div className="cs-lower">
        <div className='cs-lower-content'>
         <div className='cs-lower-header'>
           <div className='cs-lh-title'>
            <span id='cs-name'>{campsite?.name}</span>
            <span id='cs-city-state'>{campsite?.city}, {campsite?.state}</span>
          </div>
          <div className='cs-ratings'>
            {/* ADD RATINGS HERE  */}
          </div>
          <div className='cs-lh-host'>
             <div id='host-profile-pic'>
             </div>
             <div id='cs-hosted-by'>
                <span id='hb-text'>Hosted by:</span>
                <span id='hb-name'>Name Here</span>
             </div>
             <div id='cs-desc'>
              <span id='cs-desc-text'>{campsite?.description}</span>
             </div>
          </div>
         </div>
        </div>
        {/* BOOKINGS FORM */}
        <form className='cs-book-container'>
          <div className='cs-bc-price'>
            <span id='bc-price'>${campsite?.pricePerNight}</span>
            <span id='bc-price-text'>Average per night</span>
          </div>
          <div className="cs-bc-dates">
          <div className='cs-bc-checkin'>
            <label id='ci-label'>Check in
            <input  id='date-input-ci' type='date' min={dateToday}></input>
            </label>
          </div>
          <div className='cs-bc-checkout'>
            <label id='co-label'>Check out
            <input id='date-input-co' type='date' min={dateTmrw}></input>
            </label>
          </div>
          </div>
          <div className='cs-bc-guests'>
            <div className='bc-adults'>
                <label id='label-ad'>Adults
                <input type='number' id='guest-input-a'></input>
                </label>
            </div>
            <div className='bc-childs'>
                <label id='label-c'>Children
                <input type='number' id='guest-input-c'></input>
                </label>
            </div>
          </div>
          <span id='bc-ns-text'>Number of Nights Stay</span>
          <div className='bc-nights-stay'>
            <div id='bc-ns-num-box'>
              <span id='bc-ns-num'>1</span>
            </div>
            <div id='bc-ns-fullprice'>
              <span id='bc-ns-fp'>Total:</span>
            </div>
          </div>
          <div className='cs-bc-submit'>
            <span>Finalize Your Stay</span>
            <button type='submit' id='bc-submit'>Quick Book</button>
          </div>
        </form>
        {/* BOOKINGS FORM END */}
      </div>
    </div>
  )
}


export default Campsite