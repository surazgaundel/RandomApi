import { useState,useEffect } from 'react'
import './App.css'
import AgePredict from './comp/AgePredict';
import CatTruth from './comp/CatTruth';

function App() {
  const [catTruth,setCatTruth]=useState("");

  return (
    <div className="App">
      <h1>Random Things</h1><hr/>
     <CatTruth/>
     <AgePredict/>
    </div>
  )
}

export default App
