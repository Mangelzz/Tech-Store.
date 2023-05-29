import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App