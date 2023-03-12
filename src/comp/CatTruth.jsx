import { useState,useEffect } from 'react'
import Axios from 'axios';

function CatTruth() {
  const [catTruth,setCatTruth]=useState("");

  function handleChange(){
    Axios.get("https://catfact.ninja/fact")
          .then((res)=>setCatTruth(res.data.fact))
  }
    useEffect(()=>{
      handleChange()
    },[])

  return (
    <div className="catContainer">
     <h2>Random Cat Truth</h2>
     <button onClick={handleChange}>Generate</button>
     <h2>{catTruth}</h2>
    </div>
  )
}

export default CatTruth;
