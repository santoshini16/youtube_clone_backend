const express = require('express')
const mongoConn= require('./db/index')
const dotenv= require('dotenv').config()
const app = express()
const port = process.env.PORT


mongoConn()
app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})