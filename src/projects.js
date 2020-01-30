import React from 'react';
import './Project.css';
import Foot from './images/FOOTAPP.png';
import Kodflix from './images/KODFLIX.png';
import Reduce from './images/reduceWorkshop.png';
import site from './images/shop site.png';


export default function Projects() {
    return (
    <>
    <div  id='projects'>
      <h2>Projects</h2>
    <div className='pproj-container'>
    <div className='P-item'>
        <a href ='https://gideonkodflix.herokuapp.com/' target="_blank" rel="noopener noreferrer">
        <img src={Kodflix} alt='kodflix' className='pimage'></img>
        </a>
        <div className='overlay'>
                <h1>KODFLIX</h1>
            </div>
    </div>
    <div className='P-item'>
       <a href='https://kodirifootapp.herokuapp.com/' target="_blank" rel="noopener noreferrer">
       <img src={Foot} alt='Footapp' className='pimage' ></img>
       </a>
       <div className='overlay'>
                <h1>TEAM-APP</h1>
            </div>
     </div>
     <div className='P-item'>
       <a href='https://www.youtube.com/watch?v=lfmxBR_9ucY' target="_blank" rel="noopener noreferrer">
          <img src={Reduce} alt='Workshop' className='pimage' ></img>
          </a>
          <div className='overlay'>
                <h1>STUDENT-WORKSHOP</h1>
            </div>
     </div>
     <div className='P-item'>
       <a href='https://gideonstore.netlify.com/' target="_blank" rel="noopener noreferrer">
       <img src={site} alt='e-commence' className='pimage' ></img>
       </a>
       <div className='overlay'>
                <h1>E-COMMERCE</h1>
            </div>
     </div>
     </div>
    </div>
    </>
    );
}