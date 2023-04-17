import React, { useEffect, useState } from 'react';
import './App.css';
import Head from './components/header';
import BASE_URL from './api/endurls';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/login`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [])
  console.log('messge -->', message)
  console.log("BASE_URLS ------<>>>>>>>>",BASE_URL)
  return (
    <>
      <div>
        <Head />
      </div>
    </>
  );

}

export default App;
