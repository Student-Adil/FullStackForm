const path=require('path');

const express=require('express');
const hostRouter=express.Router();

const rooPath=require('../utils/path');


hostRouter.get("/host/add-home",(req,res,next)=>{
res.sendFile(path.join(rooPath,'views','addhome.html'))


 })
// import User from('../model/modle.js');
 const User=require('../model/modle.js');
  const regresterdhomes=[];
 hostRouter.post("/host/add-home",async(req,res,next)=>{

   console.log('Home regrester secussful ',req.body);
   const user=new User({
     name:req.body.housename,
     Email:req.body.email,
     Adress:req.body.adress,
     Phone:req.body.phone
   });
   await user.save();
   regresterdhomes.push({Name: req.body.housename});
res.sendFile(path.join(rooPath,'views','homeadded.html'))
  })


exports.hostRouter = hostRouter;
exports.regresterdhomes=regresterdhomes;
