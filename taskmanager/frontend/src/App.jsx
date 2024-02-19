import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import UpdateTask from './pages/UpdateTask'
import DeleteTask from './pages/DeleteTask'
import { Link } from 'react-router-dom'
import { CgGoogleTasks } from "react-icons/cg";

const App = () => {
  return (
    <>
    <Link to='/'>
      <CgGoogleTasks className='size-10 mt-5 ml-5 cursor-pointer bg-lime-400' />
    </Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tasks/create' element={<CreateTask/>}/>
      <Route path='/tasks/edit/:id' element={<UpdateTask/>}/>
      <Route path='/tasks/delete/:id' element={<DeleteTask/>}/>
    </Routes>
    </>
  )
}

export default App