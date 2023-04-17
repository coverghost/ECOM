import React, { useEffect, useState } from 'react';
import './App.css';
import BASE_URL from './api/endurls';
import LoginForm from './components/home';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/login`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [])
  // console.log('messge -->', message)
  // console.log("BASE_URLS ------<>>>>>>>>",BASE_URL)
  return (
    <>
      <div>
        <LoginForm />
      </div>
    </>
  );

}

export default App;
