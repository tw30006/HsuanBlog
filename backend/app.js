const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("successful!")
  })
  .catch((err)=> {
    console.log('err');
  })

app.get('/', (req, res)=>{
    res.send('hello world')
})
app.listen(port)