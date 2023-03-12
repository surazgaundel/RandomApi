import React from 'react'

export default function AgePredict() {

    function onPredict(){
        console.log('OK`')
    }
  return (<>
    <h2>AgePredict</h2>
    <button onClick={onPredict}>Predict</button>
  </>
  )
}
