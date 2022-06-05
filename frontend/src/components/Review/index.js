import {useSelector, useDispatch} from 'react-redux';
import { getUser } from '../../store/session';
import { useState, useEffect } from 'react';
import { csrfFetch } from '../../store/csrf';
import './Review.css'


const Review = ({review, date, userId}) => {
const sessionUser = useSelector(state => state.session.user);
const seshId = sessionUser?.id;


const [user, setUser] = useState(null);

useEffect(() => {

  const fetchData = async () => {
    const res = await csrfFetch(`/api/session/${userId}`)
    const data = await res.json();
    setUser(data);
  }
  fetchData().catch(error => console.log(error));

}, []);




  console.log()

  const convertDate = (date) => {
    const toDate = new Date(date);
    const converted = toDate.toISOString().split('T')[0];
    return converted;
  }

  const newDate = convertDate(date);


  return (
    <div className='rc-review'>
      <div className='ri-s-cntr'>
        <div id='ri-s-prof'></div>
        <span id='ri-s-name'>{user && user?.username}</span>
      </div>
      <div className='ri-r-cntr'>
        <span id='ri-r-review'>{review}</span>
        <span id='ri-r-date'>{newDate}</span>
        { seshId == user?.id &&
        <div id='rev-edit-container'>
        <button id='rev-edit'>edit</button>
        <button id='rev-delete'>delete</button>
        </div>}
          
      </div>
    </div>
  )
}


export default Review;