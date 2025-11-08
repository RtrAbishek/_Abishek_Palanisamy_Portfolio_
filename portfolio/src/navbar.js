import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <header>
      <h1
        align="center"
        style={{
          color: 'lightgreen',
          fontFamily: 'Merriweather, serif',
          fontSize: '55px',
          letterSpacing: '2px',
        }}
      >
        <hr>
        </hr>
        Abishek Palanisamy
        <hr/>
        <hr></hr>
      </h1>

      <h1
        align="left"
        style={{
          color: '#FFD700',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '32px',
          letterSpacing: '2px',
          marginBottom: '25px',
        }}
      >
        PORTFOLIO
      </h1>

      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about_me">About Me</a></li>
          <li><a href="#skills">My Skills</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#languages">Languages</a></li>
          <li><a href="#rotaract">Rotaract</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
