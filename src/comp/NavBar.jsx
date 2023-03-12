import React from 'react'
import {Link} from 'react-router-dom';


export default function NavBar() {
  return (
    <div className="navBar">
        <Link to="/catTruth">Cat Truth</Link>
        <Link to="/agePredict">Predict Age</Link>
        <Link to="/excuse">Excuses</Link>
    </div>
  )
}
