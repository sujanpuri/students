import React from 'react';
import "./App.css";
import Data from './Data';
import Navbar from './Menu/navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Data onsent={HandleSent} />
    </div>
  );
}

export default App;
