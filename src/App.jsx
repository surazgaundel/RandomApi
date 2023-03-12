import { useState,useEffect } from 'react'
import './App.css'
import Axios from 'axios';
import AgePredict from './comp/AgePredict';
import CatTruth from './comp/CatTruth';
import Excuse from './comp/Excuse';

function App() {
  const [catTruth,setCatTruth]=useState("");

  return (
    <div className="App">
      <h1>Random Things</h1><hr/>
     <CatTruth/>
     <AgePredict/>
     <Excuse/>
    </div>
  )
}

export default App
