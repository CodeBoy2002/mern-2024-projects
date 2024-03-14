import express from 'express'
import { createStudent, deleteStudent, getStudents, updateStudent, getStudent } from '../components/component.js'

const router = express.Router()

router.get('/', getStudents)
router.route('/:id').get(getStudent).delete(deleteStudent).put(updateStudent)
router.post('/', createStudent)

export default router