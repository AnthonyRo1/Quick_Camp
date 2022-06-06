import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createCampsite } from '../../store/campsites';


import './CreateForm.css'

const CreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [slideIn, setSlideIn] = useState(false);

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setStateName] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');
  const [description, setDescription] = useState('');
  const [guestsAllowed, setGuestsAllowed] = useState(0);
  const [pricePerNight, setPricePerNight] = useState(1)
  


  const updateName = (e) => setName(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setStateName(e.target.value);
  const updateGuestsAllowed = (e) => setGuestsAllowed(e.target.value);
  const updatePricePerNight = (e) => setPricePerNight(e.target.value);
  const updateImage1 = (e) => setImage1(e.target.value);
  const updateImage2 = (e) => setImage2(e.target.value);
  const updateImage3 = (e) => setImage3(e.target.value);
  const updateImage4 = (e) => setImage4(e.target.value);
  const updateImage5 = (e) => setImage5(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);


  const [errors, setErrors] = useState([]);


  const images = [image1, image2, image3, image4, image5];
  const allImages = images.filter(image => image.length > 0);






  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;


  const totalRating = null;
  let errs;



  const handleSubmit = async  (e) => {

    e.preventDefault();

    let err = []
    if (name.length < 5) {
      err.push('Campsite Name must be longer than 5 characters')
    } else if (name.length > 50) {
      err.push('Name must be less than 50 characters');
    }

    if (city.length <= 2 || city.length >= 45) {
      err.push('City name must be no longer than 45 characters and greater than 2 characters.')
    }

    if (state.length <= 2 || state.length >= 45) {
      err.push('State name must be no longer than 45 characters and greater than 2 characters.')
    }
    if (allImages.length <= 0) {
      err.push('Your Campsite must have at least 1 image.')
    }

    if (description.length < 5) {
      err.push('Your campsite must have a description longer than 5 characters.')
    }

    setErrors(err);
    const payload = {
      name,
      description,
      guestsAllowed,
      totalRating,
      pricePerNight,
      city, 
      state,
      image1,
      image2,
      image3,
      image4,
      image5,
      userId,
    }


    let createdCampsite;
    console.log(err)
    if (err.length > 0) {
      return;
    } else {
      createdCampsite = await dispatch(createCampsite(payload));
      history.push(`/campsites/${createdCampsite.id}`);
    }

    console.log(errors);
  }

  return (

    <div className='create-form-container' >

{      errors.length > 0 && <div className='err-cntr'>
        <ul>
          { errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>}
    <form className='cs-create-form' onSubmit={handleSubmit}>
      <span id='cs-cf-text'>Sign up for free and start hosting!</span>

        <span>Name of Campsite</span>
      <input 
      type='text' 
      name='name' 
      required
      placeholder="*Name"
      value={name}
      onChange={updateName}
      ></input>

        <span>City</span>
      <input type='text'
       name='city'
       placeholder='*City'
       value={city}
       onChange={updateCity}
       ></input>

        <span>State</span>
      <input 
       type='text'
       name='state' 
       placeholder='*State'
       value={state}
       onChange={updateState}
       ></input>

        <span>Number of Guests Allowed</span>
      <input 
      type='number' 
      name='guests-allowed' 
      min='1'
      placeholder='*Number of Guests Allowed'
      value={guestsAllowed}
      onChange={updateGuestsAllowed}
      ></input>

      <span>Price Per Night</span>
      <input 
      type='number' 
      min='20' step='any' 
      placeholder='*Price per Night'
      value={pricePerNight}
      onChange={updatePricePerNight}
      ></input>

        <span>Images</span>
      <input 
      type='text' 
      name='image1' 
      placeholder='*Image Url'
      value={image1}
      onChange={updateImage1}
      ></input>

      <input 
      type='text' 
      name='image2' 
      placeholder='*Image Url'
      value={image2}
      onChange={updateImage2}
      ></input>

      <input 
      type='text' 
      name='image3' 
      placeholder='*Image Url'
      value={image3}
      onChange={updateImage3}
      ></input>

      <input 
      type='text' 
      name='image4' 
      placeholder='*Image Url'
      value={image4}
      onChange={updateImage4}
      ></input>

      <input 
      type='text' 
      name='image5' 
      placeholder='*Image Url'
      value={image5}
      onChange={updateImage5}
      ></input>

        <span>Describe Your Campsite</span>
      <textarea 
      placeholder="*Description"
      value={description}
      onChange={updateDescription}
      ></textarea>
      <button type='submit' id='host-submit-btn'>Start Hosting!</button>
    </form>
    </div>
  )
}

export default CreateForm;