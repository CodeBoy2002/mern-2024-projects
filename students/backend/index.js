import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import studentRoutes from './routes/route.js'

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

const PORT = 5000

app.get('/', (req, res) => res.send("Hello world"))

app.use('/students', studentRoutes)

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`DB Connection Successful`)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch((error) => console.log(error.message))