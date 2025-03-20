import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Foorm from './pages/SignIn.jsx'
import Crud from './pages/crud.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='services' element={<Services></Services>}></Route>
          <Route path='login' element={<Foorm></Foorm>}></Route>
          <Route path='crud' element={<Crud></Crud>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
