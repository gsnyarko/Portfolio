import React from "react";
import "./App.css";
import './skills.css'
import html from './images/icons8-html-90.png';
import javascript from './images/icons8-javascript-logo-100.png';
import react from './images/icons8-react-200.png';
import mongodb from './images/icons8-mongodb-96.png';
import nodejs from './images/icons8-nodejs-96.png';
import css3 from './images/icons8-css3-100.png';



export default function Skills() {
    return (
        <div id='skills'>
            <h2>Skills</h2>
        <div className='skills-container'>
        <img src={html} alt=' '></img>
        <img src={javascript} alt=' '></img>
        <img src={react} alt=' '></img>
        <img src={nodejs} alt=' '></img>
{/* <img scr={css3} alt=' '></img> */ }
        <img src={mongodb} alt=' '></img>
        </div>
        </div>
    );
}