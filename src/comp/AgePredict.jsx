import {useState} from 'react'
import Axios from 'axios';


export default function AgePredict() {
    const [agePredict,setAgePredict] =useState('')
    const [predictedAge,setPredictedAge] = useState('');
    
    function onPredict(){
        Axios.get(`https://api.agify.io/?name=${agePredict}`)
        .then(res=>setPredictedAge(res.data))
    }
    function handleChange(e){
        setAgePredict(e.target.value)
    }
  return (<>
    <h2>AgePredict</h2>
    <input onChange={handleChange} placeholder="Ex:Ram"></input>
    <button onClick={onPredict}>Predict</button>
    {predictedAge?(<p>{(predictedAge.age >50)?(`Professional, ${predictedAge.name}, Your age is ${predictedAge.age}`):
        (`You need to do alot, ${predictedAge.name}, Your age is ${predictedAge.age}`)
    }</p>):<p>Enter your name to predict age</p>}
  </>
  )
}
