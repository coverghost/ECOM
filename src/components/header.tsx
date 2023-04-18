
import React, { useState } from 'react';
import './css/h.css'
import LoginForm from './home';

const Head = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src="https://media.istockphoto.com/id/1170078646/vector/online-shopping-icon-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=ftvyJt2w6Vp0Gh6lydk03YY4DuLjbWMWQYUGwIKQSCk=" alt="my logo img" className='logo' />

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

    </>

  );
}

export default Head;
