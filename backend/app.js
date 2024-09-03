const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

dotenv.config();
const secret = process.env.JWT_SECRET;

mongoose.connect(process.env.MONGO_URL);

const salt = bcrypt.genSaltSync(10);


app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());

app.post('/register', async(req, res)=>{
  const {username,password,name} =req.body;
  try{
    const userDoc = await User.create({username, 
      password: bcrypt.hashSync(password,salt),
       name})
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e);
  }
})

app.post('/login',async(req,res)=>{
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password,userDoc.password);
  if(passOk) {
    jwt.sign({username, id:userDoc._id},secret,{},(err,token)=>{
      if (err) {
        return res.status(500).json('生成token失敗')
      }
      res.cookie('token',token).json('ok!');
    });
  }else {
    res.status(400).json('密碼錯誤！')
  }
})

app.get('/profile',(req,res)=>{
  const {token} =req.cookies
  jwt.verify(token,secret,{},(err,info)=>{
    if (err) {
      return res.status(500).json('驗證token失敗')
    }
    res.json(info)
    
  })
})
app.listen(port)