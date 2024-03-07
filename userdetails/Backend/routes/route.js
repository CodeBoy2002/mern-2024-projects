import express from 'express'
import { createUsers, deleteUser, getUser, getUsers, updateUser } from '../components/index.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/create', createUsers)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router