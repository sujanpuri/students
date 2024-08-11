import React from 'react';
import "./App.css";
import Data from './Data';
import Navbar from './Menu/navbar';
import { useState } from "react";

function App() {
  return (
    <div className=''>
      <Navbar/>
      {/* <Data recievedData={dataFromA}/> */}
    </div>
  );
}

export default App;
