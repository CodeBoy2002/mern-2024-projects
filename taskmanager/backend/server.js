import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

import router from './routes/route.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

const connectToDB = async () => {
    try {
        await mongoose
                .connect(process.env.CONNECTION_URI)
                .then(() => app.listen(PORT, () => console.log(`CONNECTION SUCCESSFUL RUNNING ON PORT ${PORT}`)))
                .catch((error) => console.log(`ERROR OCCURRED ${error.message}`))
    } catch (error) {
        console.log(error.message)
    }
}

connectToDB()