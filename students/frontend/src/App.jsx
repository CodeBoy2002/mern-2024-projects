import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreateStudent from './pages/CreateStudent'
import UpdateStudent from './pages/UpdateStudent'
import DeleteStudent from './pages/DeleteStudent'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreateStudent/>}/>
          <Route path='/delete' element={<DeleteStudent/>}/>
          <Route path='/update' element={<UpdateStudent/>}/>
      </Routes>
    </>
  )
}

export default App