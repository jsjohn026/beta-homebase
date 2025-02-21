const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = process.env.PORT

let db, 
    dbConnectionStr = process.env.DB_STRING
    dbName = 'orders'

