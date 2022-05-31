import './CampsiteCard.css'
// You want to make a fetch request to ALL campsites.
// DISPLAY: Location & Image URL 
const CampsiteCard = ({title, location}) => {
  return (
    <div className='campsite-card'>
      <span>{title}</span>
      <span>{location}</span>
    </div>
  )
}


export default CampsiteCard;