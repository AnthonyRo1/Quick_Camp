import { useState, useEffect } from 'react'
// this form makes a query to your database to find campsites with the following criteria:
// how many children
// how many adults 
// pets allowed? 

import './MainForm.css'
const MainForm = () => {
const [dropDown, setDropDown] = useState(false);
const showDrop = () => {
  setDropDown(!dropDown);
}

  return (
    <div className='form-box'> 
    <div className='form-text'>
    </div>
    <div className='form-container'>
      <form className='mf-form'>
        <div className='where-to'>
        <label className='mf-labels'name='where-to'>Where to?</label>
        <input className='mf-input mf-text' type="text" name="where-to" placeholder='Enter a City, State, etc.'></input>
        </div>

        <div className='date-input'>
        <label name='where-to-date' className='mf-labels'>Dates</label>
        <input className='mf-input mf-date' type="date" name="where-to-date"></input>
        </div>
        <div className='dd-input'>
        <label htmlFor='guests' className='mf-labels'>Guests</label>
        <div className="mf-input mf-dropdown" name='guests' onClick={showDrop}>
          <div className='dd-container'>
                <span id='dd-text'><i className="fas fa-user"></i>Add Guests</span>
                <i class="fas fa-angle-down"></i>
            {dropDown && 
            <div className='dd-show'>
              <div className='dd-i dd-adults'>
               <div className='dd-i-text'>
                 <span>
                   Adults
                 </span>
               </div>
               <div className='dd-pm'>
                 <div className='dd-i-plus dd-i-ap'></div>
                <div className='dd-i-minus dd-i-am'></div>
               </div>
              </div>
              <div className='dd-i dd-children'>
               <div className='dd-i-text'>
                <span>Children</span>
               </div>
               <div className='dd-pm'>
                <div className='dd-i-plus dd-i-cp'></div>
                <div className='dd-i-minus dd-i-cm'></div>  
               </div>
              </div>
                <div className='dd-i dd-pets'>
                <div className='dd-i-text'>
                <span>Pets</span>
               </div>
               <div className='dd-pm'>
                <div className='dd-i-plus dd-i-pp'></div>
                <div className='dd-i-minus dd-i-pm'></div>
               </div>
              </div>
            </div>
            }
          </div>
        </div>
        </div>
        <div className='mf-search'>
            <button id='mf-btn-search' type='submit'><i class="fas fa-search"></i></button>
        </div>
      </form>
    </div>
      <div className='mf-image' style={{
        backgroundImage: "url('https://thoth.pickvisa.com/wp-content/uploads/2021/12/5a69d6f570664dafb264a5ced0c8d621.jpg')",
        backgroundSize: 'cover'
      }}>
      </div>
    </div>
  )
}


export default MainForm