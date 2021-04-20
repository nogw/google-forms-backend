require('dotenv').config()

import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 8000
const mongo_uri = process.env.MONGO_SECRET_URI

app.use(cors())
app.use(express.json())
app.use("/", userRoutes)

mongoose.connect(mongo_uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const database = mongoose.connection

database.on("error", () => {
  console.error.bind(console, "connection error:")
})

database.once("open", () => {
  console.log("database connect!")
})

app.listen(port, () => {
  console.log('server started on port '+port)
})