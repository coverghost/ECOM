import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/h.css'



const Head = (props: {onLogout: any, isLogin: any, username: any 
}) => {
  const [username, setUsername] = useState("")
  const [isLogin, setIsLogin] = useState(false)


  useEffect(() => {
    setUsername(props.username)
    setIsLogin(props.isLogin)

  }, [])

  const handleLogout = () => {
    // Call the logout API or perform any other logout logic
    props.onLogout();
  }


  return (
    <>
      <div className='header'>
        <div>
          <h1 className='logo'>LOGO</h1>
        </div>
        <div>
          <ul className='ul'>
            <li className='li'><a href="#" target="_blank" rel="noopener noreferrer">HOME</a></li>
            <li className='li'><a href="#" target="_blank" rel="noopener noreferrer">ABOUT US</a></li>
            <li className='li'><a href="#" target="_blank" rel="noopener noreferrer">SERVICES</a></li>
            <li className='li'><a href="#" target="_blank" rel="noopener noreferrer">CONTACT US</a></li>
            {/* <button className="button-34" role="button">{props.isLogin === 'true' ?(props.username).toLocaleUpperCase():"LOGIN"}</button> */}
            {props.isLogin === 'true' ? (
              <div className="button-34">
                <button className="button-34">{(props.username).toLocaleUpperCase()}</button>
                <div className="button-34">
                  <a href="#" onClick={handleLogout}>Logout</a>
                </div>
              </div>
            ) : (
              <button className="button-34" role="button">LOGIN</button>
            )}
          </ul>

        </div>
      </div>
    </>
  );
};

export default Head;
