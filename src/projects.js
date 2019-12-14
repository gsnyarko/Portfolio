import React from 'react';
import './App.css';
import Foot from './images/FOOTAPP.png';
import Kodflix from './images/KODFLIX.png';


export default function Projects() {
    return (
    <>
    
    <h1>HERE GOES MY PROJECTS</h1>
    <div id='projects'>
    <div className='P-item codflix'>
        <h4>Kodiri-Kodflix</h4>
        <img src={Kodflix} alt=''></img>
    </div>
    <div className='P-item team app'>
       <h4>myTeam-App</h4>
       <img src={Foot} alt=''></img>
     </div>
     <div className='P-item bill '>
       <h4>Bill calculator</h4>
     </div>
    </div>
    
    
    </>
    );
}