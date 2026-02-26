import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Prime Scope</h1>
      <input type="url" placeholder="Enter URL" className="url-input" />
      <button className="cta-button">Run Audit</button>
    </div>
  );
};

export default Home;
