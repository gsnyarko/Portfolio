import React from "react";
import "./App.css";
import './skills.css'
import html from './images/icons8-html-90.png';
import javascript from './images/icons8-javascript-logo-100.png';
import react from './images/icons8-react-200.png';
import mongodb from './images/icons8-mongodb-96.png';
import nodejs from './images/icons8-nodejs-96.png';
import css3 from './images/css3-512.png';



export default function Skills() {
    return (
        <div id='skills'>
            <h2>Skills</h2>
        <div className='skills-container'>
        <img src={javascript} alt='javascript'></img>
        <img src={html} alt='html'></img>
        <img src={css3} alt='css'></img> 
        <img src={react} alt='react'></img>
        <img src={nodejs} alt='node'></img>
        <img src={mongodb} alt='mongo'></img>
        </div>
        </div>
    );
}