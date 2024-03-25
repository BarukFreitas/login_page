import React from 'react'
import Login from './login'
import Signup from './signup'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App