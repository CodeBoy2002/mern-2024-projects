import express from 'express'
import { createStudent, deleteStudent, getStudents, updateStudent, getStudent } from '../components/component.js'

const router = express.Router()

router.get('/', getStudents)
router.post('/', createStudent)
router.delete('/delete/:id', deleteStudent)
router.put('/update/:id', updateStudent)
router.get('/:id', getStudent)

export default router