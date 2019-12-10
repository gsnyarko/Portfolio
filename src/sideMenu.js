import React from 'react';
import './sideMenu.css';




export default function SideMenu() {
    return(
    <div className='sidenav'>
    <div className='nav-item'><a href="default.asp">Home</a></div>
  <div className='nav-item'><a href="#about">About Me</a></div>
  <div className='nav-item'><a href="#skills">Skills</a></div>
  <div className='nav-item'><a href="#projects">Projects</a></div>
    </div>
    );
}