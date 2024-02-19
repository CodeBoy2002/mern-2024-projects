import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const navigate = useNavigate()
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: task.title,
      description: task.description,
      dueDate: task.dueDate
    }

    axios
      .post('http://localhost:5000/api/v1', data)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="font-bold text-center mt-5 text-lg">CREATE TASK</h1>
        <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 class="text-xl font-semibold mb-4">Create Task</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label for="title" class="block text-gray-700 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter title"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter description"
                value={task.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div class="mb-4">
              <label for="dueDate" class="block text-gray-700 font-medium mb-2">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={task.dueDate}
                onChange={handleChange}
                required
              />
            </div>
            <div class="text-right">
              <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
