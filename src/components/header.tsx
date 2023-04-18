
import React, { useState } from 'react';
import './css/h.css'
import LoginForm from './home';
import Hero from './hero';

const Head = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src="https://thumbs.dreamstime.com/b/motorcycle-logo-rent-vector-illustration-white-background-148810430.jpg" alt="my logo img" className='logo' />

          <div className='navbar-div'>
            <ul className="navbar-list">

              <li className="navbar-item"><a href="#">Home</a></li>
              <li className="navbar-item"><a href="#">About</a></li>
              <li className="navbar-item"><a href="#">Courses</a></li>
              <li className="navbar-item"><a href="#">Blog</a></li>
              <li className="navbar-item"><a href="#">Contact</a></li>


            </ul>
          </div>

          <button className="btn" onClick={togglePopup}>LogIn</button>
        </div>
      </nav>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <button onClick={togglePopup} className='button'>❌</button>
            <LoginForm />
          </div>
        </div>
      )}
    <div className='lorem'>
     <Hero />
    </div>
    </>

  );
}

export default Head;
