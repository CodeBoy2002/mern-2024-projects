import express from 'express'

import Customer from '../models/customerModel.js'

const router = express.Router()

router.get('/customer', async (req, res) => {
    try {
        const getAllCustomers = await Customer.find()       
        return res.status(200).json({ data: getAllCustomers })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/customer', async (req, res) => {
    try {
        const customers = await Customer.create(req.body)
        return res.status(200).json({ message: 'Another order!' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

export default router