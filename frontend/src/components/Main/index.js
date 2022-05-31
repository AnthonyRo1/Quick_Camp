import React, {useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import image from '../../images/Camping_Land/camping_1.jpg'

import { data } from '../../data/mockdata.js';
import CampsiteCard from '../CampsiteCard';
import './Main.css'
const Main = () => {
 
  return (
    <div className='main-home'>
      {
        data.map((data, i) => (
          <CampsiteCard key={i} title={data.title} location={data.location}/>
        ))
      }
    </div>
  )
}

export default Main;