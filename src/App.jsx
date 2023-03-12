import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Axios from 'axios';
import AgePredict from './comp/AgePredict';
import CatTruth from './comp/CatTruth';
import Excuse from './comp/Excuse';
import NavBar from './comp/NavBar';

function App() {

  return (
    <div className="App">
      <h1>Random Things</h1><hr/>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<h1>Hi,Welcome to Random Things</h1>}/>
          <Route path="/catTruth" element={<CatTruth/>}/>
          <Route path="/agePredict" element={<AgePredict/>}/>
          <Route path="/excuse" element={<Excuse/>}/>
          <Route path="*" element={<h1>404 Error, Page NOT Found</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
