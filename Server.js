const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/levanmanh',(req,res)=>{
   return res.status(200).json({ msg: "OK", status: 200 });
})
app.post('/levanmanh/manhmis',(req,res)=>{
   return res.status(200).json({ msg: "OK", status: 200 });
})
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})