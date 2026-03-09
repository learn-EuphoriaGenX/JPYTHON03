import React from 'react'
import Button from './components/ui/Button'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <Navbar />

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App