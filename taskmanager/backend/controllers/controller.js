import Task from '../models/modal.js'

const getTasks = async (request, response) => {
    try {
        const tasks = await Task.find()

        return response.status(200).json(tasks)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

const getSingleTask = async (request, response) => {
    try {
        const { id } = request.params

        const singleTask = await Task.findById(id)
        return response.status(200).json(singleTask)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

const createTask = async (request, response) => {
    try {
        // Extract task data from request body
        const { title, description, dueDate } = request.body;
    
        // Create a new task object
        const newTask = new Task({
          title,
          description,
          dueDate
        });

        console.log(newTask);
    
        // Save the task to the database
        await newTask.save();
    
        // Return success response
        response.status(201).json({ message: 'Task created successfully', task: newTask });
      } catch (error) {
        // Handle errors
        console.error('Error creating task:', error);
        response.status(500).json({ message: 'Error creating task' });
      }
}

const deleteTask = async (request, response) => {
    try {
        const { id } = request.params
        const deleteTask = await Task.findByIdAndDelete(id)

        return response.status(200).json({ message: 'Task Deleted Successfully' })
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

const updateTask = async (request, response) => {
    try {
        const { title, description, dueDate } = request.body

        if(!title || !description || !dueDate) {
            return response.status(401).json({ message: "Please enter all the neccessary fields" })
        }

        const { id } = request.params

        const task = {
            title,
            description,
            dueDate
        }

        const updatedTask = await Task.findByIdAndUpdate(id, task)

        response.status(200).json({ message: "Task updated successfully", task: updatedTask })
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
}

export {
    getTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
}