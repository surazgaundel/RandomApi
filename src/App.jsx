import { useState,useEffect } from 'react'
import './App.css'
import Axios from 'axios';

function App() {
  const [catTruth,setCatTruth]=useState("");

  function handleChange(){
    Axios.get("https://catfact.ninja/fact")
          .then((res)=>setCatTruth(res.data.fact))
  }
    useEffect(()=>{
      handleChange()
    },[])

  return (
    <div className="App">
     <h1>Random Cat Truth</h1>
     <button onClick={handleChange}>Generate</button>
     <h2>{catTruth}</h2>
    </div>
  )
}

export default App
