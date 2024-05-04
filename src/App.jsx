import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h2>Welcom to PetPal</h2>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

export default App;
