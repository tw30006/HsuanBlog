const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User')
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

app.post('/register', async(req, res)=>{
  const {username,password,name} =req.body;
  try{
    const userDoc = await User.create({username, 
      password: bcrypt.hashSync("password",salt),
       name})
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e);
  }
  
})
app.listen(port)