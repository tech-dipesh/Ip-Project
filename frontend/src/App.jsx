import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { Login } from './Register/login'
import { Signup } from './Register/signup'
import Home from "./content/home.jsx";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
