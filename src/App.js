import React from 'react';
import './App.css';
import Main from './main.js';
import Footer from './Footer.js';
import Projects from './projects';
import Header from './header.js';
import Skills from './skills';
import About from './About.js';


// Router not used yet

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <About />
        <Skills />
        <Projects  />
        <Footer />
    </div>
  );
}

export default App;


/*<div class="grid-container">
  <header class="header"></header>
  <aside class="sidenav"></aside>
  <main class="main"></main>
  <footer class="footer"></footer>
</div>*/