import express from 'express'
import Customer from '../models/customerModel.js'

const router = express.Router()

router.get('/customer', async (req, res) => {
    try {
        const getAllCustomers = await Customer.find()
        if(!getAllCustomers) return res.status(400).json({ message: 'NO DATA' })
        return res.status(200).json({ data: getAllCustomers })
    } catch (error) {
        return res.status(200).json({ message: error.message })
    }
})

router.post('/customer', async (req, res) => {
    try {
        const createCustomer = await Customer.create(req.body)
        if(!createCustomer) res.status(400).json({ message: 'Customer not created' })
        return res.status(200).json({ message: 'Customer created!' })
    } catch (error) {
        return res.status(200).json({ message: error.message })
    }
})

export default router