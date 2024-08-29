const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000
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

app.use(cors());
app.use(express.json());

app.post('/register', (req, res)=>{
  const {username,password,name} =req.body;
  res.json({requestData:{username,password,name}});
})
app.listen(port)