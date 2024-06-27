import React from 'react';
import './home.css';
import image from '../assets/form.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">FormFill</h1>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2 className="header-title">Welcome to MyWebsite</h2>
        <p className="header-text">Your journey to greatness begins here</p>
        <img src={image} alt="Person logging in" className="header-image" />
        <Link to="/form" className="add-logbook-btn">Go to Form</Link>
      </div>
    </header>
  );
};

export default Home;
