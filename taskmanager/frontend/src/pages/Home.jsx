import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiTwotoneEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5000/api/v1')
      .then((response) => {
        setTasks(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold uppercase'>Tasks</h1>
        <div className='mt-5 font-bold'>
          <h3 className='uppercase'>Create Task</h3>
          <Link to='/tasks/create'>
            <FaPlusSquare className='ml-10 mt-3'/>
          </Link>
        </div>
        <div className='flex flex-col mt-12'>
          {tasks.map((task, index) => {
            const { title, description, dueDate } = task
            return (
              <div key={title} className='border-x-4 border-lime-400 m-10 p-5 items-center text-center'>
                <p className='text-center font-bold'>{index + 1}.</p>
                <h1 className='font-bold uppercase'>{title}</h1>
                <p className='italic font-medium'>{description}</p>
                <p className='italic'>{dueDate}</p>
                <div className='flex gap-x-5 mt-5 cursor-pointer justify-center'>
                  <Link>
                    <AiTwotoneEdit className='bg-blue-500' />
                  </Link>
                  <Link to={`/tasks/delete/${task._id}`}>
                    <AiTwotoneDelete className='bg-red-500'/>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home