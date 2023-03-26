import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Character from "./components/Character"


import { useState } from 'react'


import './App.css'

function App() {


  return (
    <div className="container">
      <BrowserRouter>
        <Routes>  
            <Route path='/' element={<Home></Home>}></Route>            
            <Route path='/character/:id' element={<Character></Character>}></Route>
        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
