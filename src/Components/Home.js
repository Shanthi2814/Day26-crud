import React from 'react';
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='app' style={{ backgroundColor: 'peach', padding: 200 }}>
      <h1 style={{
        color: "green", textAlign: 'center', fontSize: "3rem", display: 'flex', justifyContent: 'center',
        padding: 20, textShadow: '2px 2px 4px #000000'
      }}>WELCOMES YOU</h1>
      <p style={{ color: 'black', justifyContent: 'center', display: 'flex', fontFamily: 'inherit' }}>Click here!</p>
      <button style={{
        backgroundColor: 'black', color: 'white', justifyContent: 'center', display: 'flex',
        position: 'absolute', top: '45%', left: '48%', borderRadius: '10px', padding: 7, fontFamily: 'sans-serif'
      }} onClick={() => navigate("/about")}>
        AboutEmp</button>
    </div>
  )
};

export default Home;