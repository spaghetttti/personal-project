import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/layout/layout.component.jsx'
import Home from './components/home/home.component'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
