import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as campsiteActions from '../../store/campsites';
import { data } from '../../data/mockdata.js';
import CampsiteCard from '../CampsiteCard';
import MainForm from '../MainForm';
import './Main.css'
const Main = () => {
  // dispatch made in App.js 
  // here I can use a useSelector to pass in data as props to my campsites 
  const campsites = useSelector(state => state.campsites)
  const allSites = Object.values(campsites);
  return (
      <div className='main-entire'>
        <div className='mf-container'>
      <MainForm />
      </div>
      <div className='main-home'>
        {
          allSites.map((data, i) => (
            <CampsiteCard key={i} city={data.city} state={data.state} image={data.image1} id={data.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Main;