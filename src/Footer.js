import React from "react";
import "./App.css";
import './Footer.css'

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="footer-container">
        <div className="footer-box1">
          <div className="footer-box1-item">
            <a href="https://github.com/gsnyarko" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
          <div className="footer-box1-item">
            <a
              href="https://www.linkedin.com"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="footer-box1-item">
            <a href="mailto:gsnyarko@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-box2">
          <p> by Gideon Nyarko 2020 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;