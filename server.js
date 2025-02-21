const express = require('express')
const app = express()
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})
const PORT = process.env.PORT
const homeRoutes = require('./routes/home')

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${PORT}`)
})