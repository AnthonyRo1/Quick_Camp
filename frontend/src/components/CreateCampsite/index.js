import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {useState } from 'react';
import './CreateCampsite.css'

const CreateCampsite = () => {
  const user = useSelector(state => state.session.user);
  

  const history = useHistory();
  const sendToForm = () => {
    history.push('/new')
  }

  if (!user) {
    <Redirect to='/' />
  }

  return (
  
    <div className='create-cs'>
     <div id='create-btn' onClick={sendToForm}>
      <span>+</span>
    </div> 
    <span id='create-btn-text'>Create Campsite</span> 
  </div> 
  );
}


export default CreateCampsite