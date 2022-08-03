import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CampsiteCard from '../CampsiteCard';
import MainForm from '../MainForm';
import './Main.css'
const Main = () => {
  // dispatch made in App.js 
  // here I can use a useSelector to pass in data as props to my campsites 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  const campsites = useSelector(state => state.campsites)
  const allSites = Object.values(campsites).reverse();
  return (
      <div className='main-entire'>
        <div className='motto-container'>
          <div id="#"></div>
          <span id='motto-text'>Explore The Outdoors.</span>
          <span id='motto-under'>Discover campsites near you today.</span>
        </div>
        <div className='mf-container'>
          <MainForm />
        </div>
        <div id='all-cs-title'>
          <span id='all-cs-text'>Discover Campsites Available Now.</span>
        </div>
      <div className='main-home-container'>
        <div className='main-home'>
            {
              allSites.map((data, i) => (
                <CampsiteCard key={i} city={data.city} state={data.state} image={data.image1} id={data.id}/>
              ))
            }
        </div>
      </div>
      <div className='bt-top' onClick={scrollTop}>
        <span id='bt-top-text'>Back to top</span>
        <i className="fas fa-arrow-up"></i>
      </div>
      <div id='git-cntr'>
        <a id='link-github' href='https://github.com/AnthonyRo1/Quick_Camp'>Visit My Github</a>
      </div>
    </div>
  )
}

export default Main;