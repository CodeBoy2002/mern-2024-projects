import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteStudent = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteStudent = () => {
    axios
      .delete(`http://localhost:5000/students/delete/${id}`)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete Student</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this Student?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteStudent}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteStudent