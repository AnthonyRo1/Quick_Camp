import './guestsallowed.css'
import { useState, useEffect } from 'react'

const GuestsAllowed = () => {

    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [petCount, setPetCount] = useState(0);

    const incAdult = () => {
        setAdultCount(adultCount + 1);
    }

    const decAdult = () => {
        if (adultCount === 0) return;

        setAdultCount(adultCount - 1);
    }

    const incChild = () => {
        setChildCount(childCount + 1);
    }

    const decChild = () => {
        if (childCount === 0) {
            return;
        }
        setChildCount(childCount - 1)
    }

    const incPet = () => {
        setPetCount(petCount + 1);
    }

    const decPet = () => {
        if (petCount === 0) return;

        setPetCount(petCount - 1);
    }




    return (
        <div className='search-filter-container'>
        <div className='search-filter-show'>
            <div className='dd-i dd-adults'>
                <div className='dd-i-text'>
                    <span>
                        Adults
                    </span>
                </div>
                <div className='dd-pm dd-i-a'>
                    <div className='dd-i-plus dd-i-ap' onClick={incAdult}><i className="fas fa-plus"></i></div>
                    <span className='dd-i-num'>{adultCount}</span>
                    <div className={adultCount > 0 ? 'dd-i-minus dd-i-am color-a' : 'dd-i-minus dd-i-am'} onClick={decAdult}><i className="fas fa-minus"></i></div>
                </div>
            </div>


            <div className='dd-i dd-children'>
                <div className='dd-i-text'>
                    <span>Children</span>
                </div>
                <div className='dd-pm dd-i-c'>
                    <div className='dd-i-plus dd-i-cp' onClick={incChild}><i className="fas fa-plus"></i></div>
                    <span className='dd-i-num'>{childCount}</span>
                    <div className={childCount > 0 ? 'dd-i-minus dd-i-cm color-c' : 'dd-i-minus dd-i-cm'} onClick={decChild}><i className="fas fa-minus"></i></div>
                </div>
            </div>


            <div className='dd-i dd-pets'>
                <div className='dd-i-text'>
                    <span>Pets</span>
                </div>
                <div className='dd-pm dd-i-p'>
                    <div className='dd-i-plus dd-i-pp' onClick={incPet}><i className="fas fa-plus"></i></div>
                    <span className='dd-i-num'>{petCount}</span>
                    <div className={petCount > 0 ? 'dd-i-minus dd-i-pm color-p' : 'dd-i-minus dd-i-pm'} onClick={decPet}><i className="fas fa-minus"></i></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GuestsAllowed