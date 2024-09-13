
const mongoConn= require('./db/index')
const dotenv= require('dotenv').config()
const app = require('./app')
const port = process.env.PORT


mongoConn()
.then(()=>{
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })
})
.catch((err)=>{
  console.log("mongo failed",err)
})
