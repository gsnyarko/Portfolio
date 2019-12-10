import React from 'react';
import './App.css';
import Main from './main.js';
import Footer from './Footer.js';
import Header from './header.js';
import SideMenu from './sideMenu';


// Router not used yet

function App() {
  return (
    <div className="App">
        <Header />
        <SideMenu />
        <Main />
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