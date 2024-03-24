import express from 'express'
import Product from '../models/productsModel.js'

const router = express.Router()

router.get('/product', async (req, res) => {
    try {
        const getAllProduct = await Product.find()
        if(!getAllProduct) return res.status(400).json({ message: "Not found" })

        return res.status(200).json({ data: getAllProduct })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/product', async (req, res) => {
    try {
        const createProduct = await Product.create(req.body)
        return res.status(200).json({ message: 'Product created successfully' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

export default router