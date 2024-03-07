import express from 'express'
import cors from 'cors'
import UserRoutes from './routes/route.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("Welcome Home"))
app.use('/users', UserRoutes)

const PORT = 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`CONNECTED AND SERVER RUNNING ON PORT ${PORT}`))
    })
    .catch((error) => console.log(error))