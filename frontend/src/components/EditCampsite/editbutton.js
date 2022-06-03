import {useState} from 'react';
import EditCampsite from '.';
import './EditCampsite.css';
import { useBtnContext } from '../..';



const EditButton = ({campsiteId}) => {
  
  const [popup, setPopup] = useState(false);
  const [cancel, setCancel] = useState(true)
  const togglePopup = () => {
    setPopup(!popup);
  }

  const toggleCancel = () => {
    setCancel(!cancel)
  }

  return (
    <div className='edit-form-container'>
    <div className={popup ? 'active-red' : 'ef-btn'} onClick={togglePopup}>{popup ? 'Cancel' : 'Edit'}</div>
    {popup && <EditCampsite id={campsiteId} toggleCancel={{cancel, setCancel}}/>}
    </div>

  )
}


export default EditButton;