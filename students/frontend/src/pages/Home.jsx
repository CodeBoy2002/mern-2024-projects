import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5000/students')
      .then((response) => {
        setStudents(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if(loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className=''>
    <h1 className='font-bold text-center text-xl underline my-5'>STUDENT DETAILS</h1>
    <table className='table-fixed border-separate border border-slate-500'>
      <thead>
        <tr>
          <th className='border border-slate-600'>S No.</th>
          <th className='border border-slate-600'>Name</th>
          <th className='border border-slate-600'>RollNo.</th>
          <th className='border border-slate-600'>Age</th>
          <th className='border border-slate-600'>Class</th>
          <th className='border border-slate-600'>Branch</th>
          <th className='border border-slate-600'>Phone</th>
          <th className='border border-slate-600'>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student._id} className='h-8'>
            <td className='border border-slate-700'>{index + 1}</td>
            <td className='border border-slate-700'>{student.name}</td>
            <td className='border border-slate-700'>{student.rollNumber}</td>
            <td className='border border-slate-700'>{student.age}</td>
            <td className='border border-slate-700'>{student.class}</td>
            <td className='border border-slate-700'>{student.branch}</td>
            <td className='border border-slate-700'>{student.phoneNumber}</td>
            <td className='border border-slate-700'>{student.emailId}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Home