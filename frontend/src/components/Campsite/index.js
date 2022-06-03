import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import EditButton from "../EditCampsite/editbutton";
import './Campsite.css';

const Campsite = () => {
  const {id} = useParams();
  console.log(id, 'campsiteid');
  const campsites = useSelector(state => state.campsites);
  const sessionUser = useSelector(state => state.session.user);
  const [daysStayed, setDaysStayed] = useState(1);


  const campsite = campsites[id];
  let images = [];

  if (campsite !== undefined) {
    for (let i = 1; i <= 5; i++) {
      if (campsite[`image${i}`] !== null) {
        images.push(campsite[`image${i}`])
      }
    }
  }

  const today = new Date()
  const tomorrow = new Date(today)
   tomorrow.setDate(tomorrow.getDate() + 1)


  const dateTmrw = tomorrow.toISOString().split('T')[0];
  const dateToday = today.toISOString().split('T')[0];



  //on change of date object 
  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }
  



  // pseudo code 
  /* 
  Use a useSelector to find the current campsite 
  */
  let sessionEdit;
  if (sessionUser?.id === campsite?.userId) {
     sessionEdit = (
      <EditButton campsiteId={id}/>
    )
  }


  return (
    
    <div className="cs-container">
      {sessionEdit}
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