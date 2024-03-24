import express from 'express'
import Staff from '../models/staffModel.js'

const router = express.Router()

router.post('/staff', async (req, res) => {
    const { name, email } = req.body
    const createdStaff = await Staff.create({
        name, 
        email
    })

    return res.status(200).json({ message: createdStaff })
})

export default router