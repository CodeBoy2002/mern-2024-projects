import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'

const App = () => {
  return (
    <div>
        <div className='bg-gray-200 border p-5 h-24 rounded-xl'>
          <div className='flex justify-between'>
            <h3 className='font-bold cursor-pointer mt-auto uppercase'>Home</h3>
            <div className='flex gap-3 '>
              <h3 className='font-bold cursor-pointer bg-green-200 p-2 ring rounded-md shadow-lg hover:bg-green-500'>Create</h3>
              <h3 className='font-bold cursor-pointer bg-red-200 p-2 ring rounded-md shadow-lg hover:bg-red-500'>AboutUs</h3>
            </div>
          </div>
        </div>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Create/>} path='/users/create'/>
          <Route element={<Update/>} path='/users/update/:id'/>
          <Route element={<Delete/>} path='/users/delete/:id'/>
        </Routes>
        <div className='bg-black text-white p-5 flex gap-3 space-x-5'>
          <a href="http://www.github.com" target="_blank">
            <p>github</p>
          </a>
          <a href="http://www.linkedin.com" target='_blank'>
            <p>linkedin</p>
          </a>
          <a href="http://www.instagram.com" target='_blank'>
            <p>instagram</p>
          </a>
        </div>
    </div>
  )
}

export default App