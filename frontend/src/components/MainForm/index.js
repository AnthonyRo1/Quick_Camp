// this form makes a query to your database to find campsites with the following criteria:
// how many children
// how many adults 
// pets allowed? 

import './MainForm.css'
const MainForm = () => {
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
        <label for='guests' className='mf-labels'>Guests</label>
        <div className="mf-input mf-dropdown" name='guests'>
          <div className='dd-container'>
            <span>Add Guests</span>
            <div id='dd-adults'></div>
            <div id='dd-children'></div>
            <div id='dd-pets'></div>
          </div>
        </div>
        </div>
      </form>
    </div>
      <div className='mf-image' style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80')",
        backgroundSize: 'cover'
      }}>
      </div>
    </div>
  )
}


export default MainForm