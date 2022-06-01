import './CampsiteCard.css'
import { NavLink } from 'react-router-dom';
// You want to make a fetch request to ALL campsites.
// DISPLAY: Location & Image URL 
const CampsiteCard = ({city, state, image, id}) => {
  return (
    <div className='cc-container'>
      <NavLink to={`/campsites/${id}`}>
    <div className='campsite-card' style={{
      backgroundImage: `url(${image})`,
      backdropFilter: 'brightness(1.5)',
      saturation: '1.5',
      backgroundSize: 'contain',
      backgroundSize: 'cover'
    }}>
    </div>
      </NavLink>
    <div className='location-container'>
      <span className='cc-city'>{city}</span>
    
    <div>
      <span className='cc-state'>{state}</span>
    </div>
      </div>
    </div>
  )
}


export default CampsiteCard;