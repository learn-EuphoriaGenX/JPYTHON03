import React from 'react'
import Button from './components/ui/Button'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Navbar />

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App