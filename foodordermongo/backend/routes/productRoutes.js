import express from 'express'
import Product from "../models/productsModel.js";

const router = express.Router()

router.get('/product', async (req, res) => {
    try {
        const getAllProducts = await Product.find().populate('customer_id')
        return res.status(200).json({ data: getAllProducts })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const productDetail = await Product.findById(id).populate('customer_id')
        return res.status(200).json({ data: productDetail })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/product', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        return res.status(200).json({ data: newProduct })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

export default router