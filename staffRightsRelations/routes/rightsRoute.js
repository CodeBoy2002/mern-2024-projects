import express from 'express'
import Right from '../models/rightsModel.js'

const router = express.Router()

router.post('/right', async (req, res) => {
    const { staff_id, right } = req.body
    const rights = await Right.create({ staff_id, right })
    await rights.save()

    return res.status(200).json({ message: rights })
})

router.get('/right/:id', async (req, res) => {
    const { id } = req.params
    const rightData = await Right.findById(id).populate('staff_id')

    if(!rightData) return res.status(400).json({ message: "Not found" })

    return res.status(200).json({ data: rightData })
})

export default router