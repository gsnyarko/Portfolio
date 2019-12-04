import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import About from './About.js'
import Footer from './Footer.js'
import Header from './header.js'


// Router not used yet

function App() {
  return (
    <div className="App">
      <Router>
      </Router>
      <div className='container'>
        
        <Header />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
