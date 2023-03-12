import {useState,useEffect} from 'react'
import Axios from 'axios';

export default function Excuse() {
    const[Excuse,setExcuse] =useState('')

    function handleExcuse(ex){
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/`)
        .then(res=>setExcuse(res.data[0].excuse))
    }
    useEffect(()=>{handleExcuse()},[])
  return (
    <div><h1>Generate your excuse accordingly</h1>
    <button onClick={()=>handleExcuse("family")}>Family</button>
    <button onClick={()=>handleExcuse('office')}>Office</button>
    <button onClick={()=>handleExcuse('party')}>Party</button>
    <button onClick={()=>handleExcuse('unbelievable')}>WOW</button>
    <p>{Excuse}</p>
    </div>
  )
}
