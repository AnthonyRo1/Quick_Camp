import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAllCampsites, getCampsites } from "../../store/campsites";
import EditButton from "../EditCampsite/editbutton";
import DeleteButton from "../EditCampsite/deletebutton";
import {createBooking} from '../../store/bookings'
import './Campsite.css';
import Review from "../Review";
import AddReview from "../Review/addReview";
import { csrfFetch } from "../../store/csrf";

const Campsite = () => {
  const { id } = useParams();
  const history = useHistory()
  const dispatch = useDispatch();

  // campsites + session user 
  const campsites = useSelector(state => state.campsites);
  const sessionUser = useSelector(state => state.session.user);

  // userId + campsiteId
  const userId = sessionUser?.id;
  const campsite = campsites[id];
  const camperId= campsite?.userId;

  // reviews + username / id 
  const reviews = useSelector(state => state.reviews);
  const allReviews = Object.values(reviews)
  const campsiteReviews = allReviews.filter(review => review.campsiteId === campsite?.id);


  


  const [index, setIndex] = useState(0);
  

  const [host, setHost] = useState(null);


 useEffect(() => {
   window.scrollTo(0, 0)

   const fetchData = async() => {
     const res = await csrfFetch(`/api/session/${camperId}`)
     const data = await res.json();
     setHost(data);
   }

   fetchData().catch(error => console.log(error))

 }, [])


 

  let img = [];
  if (campsite !== null) {
    img = [campsite?.image1, campsite?.image2, campsite?.image3, campsite?.image4, campsite?.image5];

    img = img.filter(eachImage => eachImage);
  }

  

// if you hit the right button, index + 1;
// if you hit the left button, index + 2;
// if the index hits array.length - 1 && user click right then set index to 0 > vice versa for index 0; 

  const scrollRight = () => {
    if (index === img.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  const scrollLeft = () => {
    if (index === 0) setIndex(img.length - 1);
    else setIndex(index - 1);
  }

  // get current date + tomorrow's date 
  const today = new Date()
  const tomorrow = new Date(today)
   tomorrow.setDate(tomorrow.getDate() + 1)
 
  const dateTmrw = tomorrow.toISOString().split('T')[0];
  const dateToday = today.toISOString().split('T')[0];
  // get current date + tomrrow's date 

  const convertDate = (date) => {
    const toDate = new Date(date);
    const converted = toDate.toISOString().split('T')[0];
    return converted;
  }

  const dayAhead = (checkIn) => {
    const nextDay = new Date(checkIn);
    nextDay.setDate(nextDay.getDate() + 2);

    const dateNext = nextDay.toISOString().split('T')[0];
     return dateNext
  }

  // Num days between two dates 
  const daysBetween = (date_1, date_2) => {
    date_1 = new Date(date_1);
    date_2 = new Date(date_2);
    let difference = date_2.getTime() - date_1.getTime()
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays
  }


  // Num days between two dates;
  const [checkIn, setCheckIn] = useState(dateToday);
  const [checkout, setCheckout] = useState(dateTmrw);
  const [numAdults, setNumAdults] = useState('');
  const [numChildren, setNumChildren] = useState('');
  const [totalCost, setTotalPrice] = useState(0)
  const [totalDays, setTotalDays] = useState(1);
  const [displayPrice, setDisplayPrice] = useState(campsite?.pricePerNight);
  const [totalGuests, setTotalGuests] = useState(0);

  const [adultsCount, setAdultsCount] = useState(1);
  const [childsCount, setChildsCount] = useState(0);
  const [totalCount, setTotalCount] = useState(1);
  

  const incAdults = () => {
    setAdultsCount(adultsCount + 1);
    setTotalCount(childsCount + adultsCount)
  }

  const decAdults = () => {
    if (adultsCount === 0) return
    setAdultsCount(adultsCount - 1);
    setTotalCount(childsCount + adultsCount)
  }


  const incChilds = () => {
    setChildsCount(childsCount + 1);
    setTotalCount(childsCount + adultsCount)
  }

  const decChilds = () => {
    if (childsCount === 0) return;
    setChildsCount(childsCount - 1);
    setTotalCount(childsCount + adultsCount)
  }


  const updateCheckIn = (e) => {
    setCheckIn(convertDate(e.target.value));
  }

  const updateCheckout = (e) => {
    setCheckout(convertDate(e.target.value));
  }

  const updateAdults = (e) => {
    setNumAdults(e.target.value);
  }

  const updateChildren = (e) => {
    setNumChildren(e.target.value);
  }

  useEffect(() => {
    setTotalPrice(Number(daysBetween(checkIn, checkout)) * Number(campsite?.pricePerNight));

    setTotalGuests(Number(numAdults) + Number(numChildren));
  }, [updateAdults, updateChildren, updateCheckIn, updateCheckout])

  


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    let checkOut = checkout;
    let campsiteId = id;
    const payload = {
      checkIn,
      checkOut,
      totalGuests,
      userId,
      campsiteId,
      totalCost,
    }

    let createdBooking;

    createdBooking = await dispatch(createBooking(payload))
    history.push('/bookings')
  }



  useEffect(() => {
    const daysTotal = Number(daysBetween(checkIn, checkout));
    const price = Number(campsite?.pricePerNight);
    setDisplayPrice(daysTotal * price);
    setTotalDays(daysBetween(checkIn, checkout))
  }, [checkIn, checkout])



  let sessionEdit;
  if (sessionUser?.id === campsite?.userId) {
     sessionEdit = (
       <>
      <DeleteButton campsiteId={id} />
      <EditButton campsiteId={id}/>
      </>
    )
  } 


  return (
    // Entire Container 
    <div className="cs-container">

      {/* Edit Form Container */}
      <div className='ed-container'>
      {sessionEdit}
      </div>
      {/* Edit Form Container */}



      {/* Iterate over images */}
      <div className='scroll-left' onClick={scrollLeft}><i className="fas fa-arrow-left"></i></div>
      <div className='cs-i-container'>
        <div className='cs-images'
        style={{
          backgroundImage: `url(${img[index]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        ></div>
          {/* { campsite !== undefined &&
       
             
               img.map(img => (
              <div key={1}className='cs-images'
              style={{
                backgroundImage: `url(${img}`
              }}
              ></div>
               ))
            } */}
          
      </div>
      <div className='scroll-right' onClick={scrollRight}><i className="fas fa-arrow-right" ></i></div>
      {/* Iterate over images */}


      {/* Lower Content (reviews + booking form) */}
      <div className="cs-lower">
        <div className='cs-lower-content'>
         <div className='cs-lower-header'>
           <div className='cs-lh-title'>
            <span id='cs-name'>{campsite?.name}</span>
            <span id='cs-city-state'>{campsite?.city}, {campsite?.state}</span>
          </div>
          <div className='cs-ratings'>
            {/* ADD RATINGS HERE  */}
          </div>
          <div className='cs-lh-host'>
             <div id='host-profile-pic'>
             </div>
             <div id='cs-hosted-by'>
                <span id='hb-text'>Hosted by:</span>
                <span id='hb-name'>{host && host.username}</span>
             </div>
             <div id='cs-desc'>
              <span id='cs-desc-text'>{campsite?.description}</span>
             </div>
          </div>
         </div>    
         {/* REVIEWS GO HERE REVIEWS REVIEWS REVIEWS  */}
         <div className='review-container'>
           <div className='review-info'>
             <div className='ri-count'>X reviews..</div>
             <AddReview campsiteId={campsite?.id} userId={userId}/>
           </div>
            {/* Iterate over all reviews */}
            {
              campsiteReviews.map((review, i) => (
                <Review key={i} review={review?.review} date={review?.createdAt} userId={review?.userId}/>
              ))
              
            }
            
            {/* Iterate through all reviews */}
         </div>
        </div>
        {/* Lower Content (reviews + booking form) */}



        {/* BOOKINGS FORM */}
        <div className='cs-booking-div'>
        <form className='cs-book-container' onSubmit={handleSubmit}>
          <div className='cs-bc-price'>
            <span id='bc-price'>${campsite?.pricePerNight}</span>
            <span id='bc-price-text'>Average per night</span>
          </div>
          <div className="cs-bc-dates">
          <div className='cs-bc-checkin'>
            <label 
            id='ci-label'

            >Check in
            <input  
            id='date-input-ci' 
            type='date' 
            min={dateToday}
            value={checkIn}
            onChange={updateCheckIn}
            ></input>
            </label>
          </div>
          <div className='cs-bc-checkout'>
            <label id='co-label'>Check out
            <input 
            id='date-input-co' 
            type='date' 
            min={dateTmrw}
            value={new Date(checkIn) >= new Date(checkout) ? setCheckout(dayAhead(checkout)) : checkout}
            onChange={updateCheckout}
            ></input>
            </label>
          </div>
          </div>
          <div className='cs-bc-guests'>
            <div className='bc-adults'>
                <span id='adults-text'>adults</span>
                <div className='adults-btns'>
                  <div id='a-inc' onClick={incAdults}><i className="fas fa-plus" ></i></div>
              <span id='a-num'>{adultsCount}</span>
                  <div className={adultsCount > 0 ? 'btn-dec active-af' : 'btn-dec'} onClick={decAdults}><i className="fas fa-minus"></i></div>
               </div>
             
                {/* <label id='label-ad'>Adults
                <input 
                type='number' 
                id='guest-input-a'
                value={numAdults}
                onChange={updateAdults}
                ></input>
                </label> */}
            </div>
            <div id='guest-total-ac'>
            <span id='gt-total'>total:</span>
                <span id='gt-t'>{totalCount}</span>
            </div>
            <div className='bc-childs'>
              <span id='childs-text'>childs</span>
              <div className='childs-btns'>
                  <div id='c-inc' onClick={incChilds}><i className="fas fa-plus"></i></div>
              <span id='c-num'>{childsCount}</span>
                  <div className={childsCount > 0 ? 'btn-dec active-cf' : 'btn-dec'} onClick={decChilds}><i className="fas fa-minus"></i></div>
              </div>
                {/* <label id='label-c'>Children
                <input 
                type='number' 
                id='guest-input-c'
                value={numChildren}
                onChange={updateChildren}
                ></input>
                </label> */}
            </div>
          </div>
          <span id='bc-ns-text'>Total Nights Stay</span>
          <div className='bc-nights-stay'>
            <div id='bc-ns-num-box'>
              <span id='bc-ns-num'>{totalDays}</span>
            </div>
            <div id='bc-ns-fullprice'>
              <span id='bc-ns-fp'>Total: ${displayPrice ? displayPrice : campsite?.pricePerNight}</span>
            </div>
          </div>
          <div className='cs-bc-submit'>
            <span id='finalize'>Finalize Your Stay</span>
            <button type='submit' id='bc-submit'>Quick Book</button>
          </div>
        </form>
        </div>
        {/* BOOKINGS FORM END */}
      </div>

    </div>
  )
}


export default Campsite