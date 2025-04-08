// core module
const path=require('path');
const express=require('express')
const userRouter=express.Router();



const rooPath=require('../utils/path');
const { regresterdhomes } = require('./host');

userRouter.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(rooPath,'views','contact-us.html'))
});

userRouter.get("/About-us",(req,res,next)=>{
  res.sendFile(path.join(rooPath,'views','About-us.html'))
});

userRouter.get("/About-me",(req,res,next)=>{
  res.sendFile(path.join(rooPath,'views','About-me.html'))
});


userRouter.get("/",(req,res,next)=>{
  console.log(regresterdhomes);
res.sendFile(path.join(rooPath,'views','home.html'))
});

module.exports = userRouter;