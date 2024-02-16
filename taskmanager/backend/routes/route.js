import express from 'express'
import { getTasks, getSingleTask, deleteTask, updateTask, createTask } from '../controllers/controller.js'

const router = express.Router()

router.get('/', getTasks)
router.post('/', createTask)
router.get('/:id', getSingleTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router