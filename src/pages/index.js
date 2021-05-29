import React from 'react';
import logo from './pic.jpeg';
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to Cognigo Customs</h1>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
};
  
export default Home;