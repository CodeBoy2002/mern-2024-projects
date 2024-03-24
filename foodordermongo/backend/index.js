import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import customerRoute from './routes/userRoutes.js'
import productRoute from './routes/productRoutes.js'

const app = express()
dotenv.config() 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world'))

app.use('/app', customerRoute)
app.use('/app', productRoute)

const PORT = 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> {
        console.log('DB CONNECTED');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch(() => console.log('Error'))
