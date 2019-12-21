import React from 'react';
import './App.css';
import Foot from './images/FOOTAPP.png';
import Kodflix from './images/KODFLIX.png';
import Reduce from './images/reduceWorkshop.png';


export default function Projects() {
    return (
    <>
    
    
    <div id='projects'>
      <h2>Project</h2>
    <div className='pproj'>
    <div className='P-item kodiri'>
        <h4>Kodiri-Kodflix</h4>
        <a href ='https://gideonkodflix.herokuapp.com/'>
        <img src={Kodflix} alt=''></img>
        </a>
    </div>
    <div className='P-item teamapp'>
       <h4>myTeam-App</h4>
       <a href='https://kodirifootapp.herokuapp.com/'>
       <img src={Foot} alt=''></img>
       </a>
     </div>
     <div className='P-item workshop'>
       <h4>Student Workshop</h4>
       <a href='https://www.youtube.com/watch?v=lfmxBR_9ucY'>
          <img src={Reduce} alt=''></img>
          </a>
     </div>
     <div className='P-item'>
       <h4>Bill calculator</h4>
       <img src={Foot} alt=''></img>
     </div>
     </div>
    </div>
    
    
    </>
    );
}