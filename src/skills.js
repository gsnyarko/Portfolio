import React from "react";
import "./App.css";
import './skills.css'
import css3 from './images/Css3.png';
import html from './images/Html5.png';
import javascript from './images/javascript.jpg';
import react from './images/react.png';
import typescript from './images/typescript.png';



export default function Skills() {
    return (
        <div id='skills'>
            <h2>Skills</h2>
        <div className='skills-container'>
        <img src={html} alt=' '></img>
        <img src={javascript} alt=' '></img>
        <img src={react} alt=' '></img>
        <img src={typescript} alt=' '></img>
        <img scr={css3} alt=' '></img>
        </div>
        </div>
    );
}