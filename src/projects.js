import React from 'react';
import './App.css';
import Foot from './images/FOOTAPP.png';
import Kodflix from './images/KODFLIX.png';
import Reduce from './images/reduceWorkshop.png';
import site from './images/shop site.png';


export default function Projects() {
    return (
    <>
    <div className='project' id='projects'>
      <h2>Projects</h2>
    <div className='pproj'>
    <div className='P-item'>
        <h4>Kodiri-Kodflix</h4>
        <a href ='https://gideonkodflix.herokuapp.com/' target="_blank" rel="noopener noreferrer">
        <img src={Kodflix} alt='kodflix'></img>
        </a>
    </div>
    <div className='P-item'>
       <h4>myTeam-App</h4>
       <a href='https://kodirifootapp.herokuapp.com/' target="_blank" rel="noopener noreferrer">
       <img src={Foot} alt='Footapp'></img>
       </a>
     </div>
     <div className='P-item'>
       <h4>Student Workshop</h4>
       <a href='https://www.youtube.com/watch?v=lfmxBR_9ucY' target="_blank" rel="noopener noreferrer">
          <img src={Reduce} alt='Workshop'></img>
          </a>
     </div>
     <div className='P-item'>
       <h4>Shopping Site(in progress)</h4>
       <img src={site} alt=''></img>
     </div>
     </div>
    </div>
    </>
    );
}