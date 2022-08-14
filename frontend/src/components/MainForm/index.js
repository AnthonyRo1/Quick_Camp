import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import GuestsAllowed from '../GuestsAllowed'
// this form makes a query to your database to find campsites with the following criteria:
// how many children
// how many adults 
// pets allowed? 

import './MainForm.css'
const MainForm = () => {

const history = useHistory();
const [dropDown, setDropDown] = useState(false);
const [guestForm, setGuestForm] = useState(false);
const [type, setType] = useState(false);

// plus minus animations if possible 
const [adultColor, setAdultColor] = useState(false);
const [childColor, setChildColor] = useState(false);
const [petColor, setPetColor] = useState(false);

// plus minus animations if possible 


const [guestTotal, setGuestTotal] = useState(0);

const [adultCount, setAdultCount] = useState(0);
const [childCount, setChildCount] = useState(0);
const [petCount, setPetCount] = useState(0);


const incNum = (data) => {
  return data + 1
}

const decNum = (data) => {
  if (data === 0) return 0;
  return data - 1
}
const incAdult = () => {
  setAdultCount(adultCount + 1);
}

const decAdult = () => {
  if (adultCount === 0) return;

  setAdultCount(adultCount - 1);
}

const incChild = () => {
  setChildCount(childCount + 1);
}

const decChild = () => {
  if (childCount === 0) {
    return;
  }
  setChildCount(childCount - 1)
}

const incPet = () => { 
  setPetCount(petCount + 1);
}

const decPet = () => {
  if (petCount === 0) return;

  setPetCount(petCount - 1);
}

let content;
const showDrop = (type) => {
  if (type === 'd') {
    setType('d');
    setGuestForm(false)
    setDropDown(false)
    return;
  }
  if (window.innerWidth < 1020 && type !== 'd') {
    setType(type)
   return setGuestForm(true);
  }


  // if (guestForm === true) {
  // return  setGuestForm(false);
  // }
 
  if (window.innerWidth > 1020 && type === 'c') {
    setType('c');
    setDropDown(!dropDown);
    setGuestForm(dropDown);
    if (dropDown) {
      setType('d');
    }
  }
  return;
}


  return (
    <>
    <div className='form-box'> 
      <div className='form-text'>
      </div>
      <div className='form-container'>
        <form className='mf-form'>
          <div className='where-to'>
            <div className='where-to-inputs'>
            <label className='mf-labels'name='where-to'>Where to?</label>
            <input className='mf-input mf-text' type="text" name="where-to" placeholder='Enter a City, State, etc.' onClick={() => showDrop('a')}></input>
            </div>
          </div>
          <div className='dd-is-box'>
              <div className='date-input'>
            <label name='where-to-date' className='mf-labels'>Dates</label>
                <input className='mf-input mf-date' type="date" name="where-to-date" onClick={() => showDrop('b')}></input>
          </div>
          <div className='dd-input'>
            <label htmlFor='guests' className='mf-labels'>Guests</label>
            <div className="mf-input mf-dropdown" name='guests'>
                <div className='dd-container'>
                  <span id='dd-text' onClick={() => showDrop('c')}>
                    <i className="fas fa-user"></i>
                    Add Guests
                  </span>
                  <i className="fas fa-angle-down" onClick={() => showDrop('c')}></i>
                </div>
            </div>
              {dropDown &&
                <div className='dd-show'>


                  <div className='dd-i dd-adults'>
                    <div className='dd-i-text'>
                      <span>
                        Adults
                      </span>
                    </div>
                    <div className='dd-pm dd-i-a'>
                      <div className='dd-i-plus dd-i-ap' onClick={()=> setAdultCount(incNum(adultCount))}><i className="fas fa-plus"></i></div>


                      <span className='dd-i-num'>{adultCount}</span>


                      <div className={adultCount > 0 ? 'dd-i-minus dd-i-am color-a' : 'dd-i-minus dd-i-am'}
                      onClick={() => setAdultCount(decNum(adultCount))}><i className="fas fa-minus"></i></div>
                    </div>
                  </div>


                  <div className='dd-i dd-children'>
                    <div className='dd-i-text'>
                      <span>Children</span>
                    </div>
                    <div className='dd-pm dd-i-c'>
                      <div className='dd-i-plus dd-i-cp' onClick={() => setChildCount(incNum(childCount))}><i className="fas fa-plus"></i></div>


                      <span className='dd-i-num'>{childCount}</span>


                      <div className={childCount > 0 ? 'dd-i-minus dd-i-cm color-c' : 'dd-i-minus dd-i-cm'} onClick={() => setChildCount(decNum(childCount))}><i className="fas fa-minus"></i></div>
                    </div>
                  </div>


                  <div className='dd-i dd-pets'>
                    <div className='dd-i-text'>
                      <span>Pets</span>
                    </div>
                    <div className='dd-pm dd-i-p'>

                      <div className='dd-i-plus dd-i-pp' onClick={() => setPetCount(incNum(petCount))}><i className="fas fa-plus"></i></div>


                      <span className='dd-i-num'>{petCount}</span>


                      <div className={petCount > 0 ? 'dd-i-minus dd-i-pm color-p' : 'dd-i-minus dd-i-pm'} onClick={() => setPetCount(decNum(petCount))}><i className="fas fa-minus"></i></div>
                    </div>
                  </div>


                </div>
              }
          </div>
          </div>
          <div className='mf-search'>
              <button id='mf-btn-search' type='submit'><i className="fas fa-search"></i></button>
          </div>
        </form>
      </div>
      <div className='mf-image' style={{
        backgroundImage: "url('https://thoth.pickvisa.com/wp-content/uploads/2021/12/5a69d6f570664dafb264a5ced0c8d621.jpg')",
        backgroundSize: 'cover'
      }}>
      </div>
    </div>
      {
      guestForm && type === 'a' ? 
        <div className='large-guestform-container'>
          <div className='lg-exit-row'>
            <button className='lg-exit-btn'  onClick={() => showDrop('d')}>
                <i className="fas fa-times lg-exit-icon"></i>
            </button>
          </div>
            <div className='lg-show-l-box'>
                <h1>A</h1>
            </div>
          
        </div> : 

        type === 'b' ? 
        <div className='large-guestform-container'>
          <div className='lg-exit-row'>
            <button className='lg-exit-btn'  onClick={() => showDrop('d')}>
                  <i className="fas fa-times lg-exit-icon"></i>
            </button>
          </div>
            <div className='lg-show-l-box'>
                <h1>B</h1>
            </div>
          
        </div> : 

        type === 'c' ? 
        <div className='large-guestform-container'>
          <div className='lg-exit-row' >
            <button className='lg-exit-btn' onClick={() => showDrop('d')}>
                    <i className="fas fa-times lg-exit-icon"></i>
            </button>
          </div>
            <div className='lg-show-l-box'>
                <h1>C</h1>
            </div>
          
        </div> :



        <div className='large-guestform-container hidden'></div>
      }
    </>
  )
}


export default MainForm