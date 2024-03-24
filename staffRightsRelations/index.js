import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'

import staffRoutes from './routes/staffRoute.js'
import rightsRoutes from './routes/rightsRoute.js'

const app = express()

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const PORT = 5000

app.use('/app', staffRoutes)
app.use('/app', rightsRoutes)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log('SERVER ON'))
    })
    .catch((error) => console.log(error.message))
