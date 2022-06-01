import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import './Campsite.css';

const Campsite = () => {
  const {id} = useParams();
  const campsites = useSelector(state => state.campsites);
  const campsite = campsites[id];
  let images = [];

  if (campsite !== undefined) {
    for (let i = 1; i <= 5; i++) {
      if (campsite[`image${i}`] !== null) {
        images.push(campsite[`image${i}`])
      }
    }
  }



  return (
    <div className="cs-container">
      <div className='cs-i-container'>

    
        <div className='cs-images'>

        </div>
        <div className='cs-images'>

        </div>
        <div className='cs-images'>

        </div>
      </div>
      <div className="cs-lower">
        <div className='cs-lower-content'>
         <div className='cs-lower-header'>
            <span id='cs-name'>{campsite?.name}</span>
            <span id='cs-city'>{campsite?.city}</span>
         </div>
        </div>
        <div className='cs-book-container'>

        </div>
      </div>
    </div>
  )
}


export default Campsite