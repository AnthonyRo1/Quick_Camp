import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editCampsite } from '../../store/campsites';
import './EditCampsite.css';


const EditCampsite = ({id}) => {

  const history = useHistory();
  const dispatch = useDispatch()
  const [slideIn, setSlideIn] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const campsites = useSelector(state => state.campsites);
  const campsite = campsites[id];


  const [form, setForm] = useState(true);
  const hideForm = () => {
    setForm(!form);
  }

  const [name, setName] = useState(campsite.name);
  const [city, setCity] = useState(campsite.city);
  const [state, setStateName] = useState(campsite.state);
  const [image1, setImage1] = useState(campsite.image1);
  const [image2, setImage2] = useState(campsite.image2);
  const [image3, setImage3] = useState(campsite.image3);
  const [image4, setImage4] = useState(campsite.image4);
  const [image5, setImage5] = useState(campsite.image5);
  const [description, setDescription] = useState(campsite.description);
  const [guestsAllowed, setGuestsAllowed] = useState(campsite.guestsAllowed);
  const [pricePerNight, setPricePerNight] = useState(campsite.pricePerNight)
  const [errors, setErrors] = useState([]);


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



  
  const userId = Number(sessionUser.id);


  const totalRating = null;
  const handleSubmit = async (e) => {
    e.preventDefault();

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


    let updatedCampsite;


    updatedCampsite = await dispatch(editCampsite(id, payload));
    history.push(`/campsites/${updatedCampsite.id}`);
    hideForm();
  }




  return (
    <>
    { form && <div className='ef-main-container'>
    <form className='ef-form' onSubmit={handleSubmit}>
        <span>Edit Name</span>
      <input 
      type='text' 
      placeholder='*Edit Name'
      value={name}
      onChange={updateName}

      ></input>
        <span>Edit City</span>
      <input 
      type='text' 
      placeholder='*Edit City'
      value={city}
      onChange={updateCity}

      ></input>
        <span>Edit State</span>
      <input 
      type='text' 
      placeholder='*Edit State'
      value={state}
      onChange={updateState}

      ></input>
        <span>Edit Guests Allowed</span>
      <input 
      type='number' 
      placeholder='*Edit Guests Allowed' 
      min='1'
      value={guestsAllowed}
      onChange={updateGuestsAllowed}
      ></input>
        <span>Edit Price Per Night</span>
      <input 
      type='number' 
      placeholder='*Edit Price Per Night' 
      min='1'
      value={pricePerNight}
      onChange={updatePricePerNight}
      ></input>
        <span>Add At Least One Image Below</span>
      <div className='image-ef-box'>
      <input 
      type='text' 
      placeholder='*Image URL'
      value={image1}
      onChange={updateImage1}
      ></input>
      <input 
      type='text' 
      placeholder='*Image URL'
      value={image2}
      onChange={updateImage2}

      ></input> 
      <input 
      type='text' 
      placeholder='*Image URL'
      value={image3}
      onChange={updateImage3}
      ></input> 
      <input 
      type='text' 
      placeholder='*Image URL'
      value={image4}
      onChange={updateImage4}
      ></input> 
      <input 
      type='text' 
      placeholder='*Image URL'
      value={image5}
      onChange={updateImage5}
      ></input>
      </div>
       <span>Edit Description</span>
      <textarea 
      id='ef-desc'
      placeholder='*Edit Description'
      value={description}
      onChange={updateDescription}
      ></textarea>
      <button 
      type='submit'
      id='ef-submit-btn'
      >Submit Changes</button>
    </form>
  </div> }
    </>
  )
}


export default EditCampsite;