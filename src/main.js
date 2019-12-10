import React from 'react';
import About from './About.js';
import Skills from './skills';
import './main.css';


export default function Main() {
    return(
    <>
    <div className='main-container'>
        <div id='photo'>
      <div className="line-1 anim-typewriter">
          <h1>GIDEON NYARKO</h1>
          <h2>Europe Based</h2>
          <h2>Full-Stack Software Developer</h2>
          </div>
      </div>
        <About className='about'/>
        <Skills className='skills'/>
        </div>
    </>
    )
}