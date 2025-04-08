const express=require('express');
const bodyParser=require('body-parser')
const app=express();

app.use((req,res,next)=>{
  console.log("Fist dumm middle ware",req.url,req.method)
  next();
})

app.use((req,res,next)=>{
  console.log("Second dummy middleware",req.url,req.method);
  next();
})
app.get("/",(req,res,next)=>{
  console.log("Handling for /get",req.url,req.method)
 res.send("Hello world")
})

app.get("/contect-us",(req,res,next)=>{
  console.log("contact us  for /get",req.url,req.method)
 res.send(`
  <h1> Please give yours details here</h1>
  <form action="/contect-us"  method="POST">
  <input type="text" name="name" placeholder=" Enter your Name"/> <br> <br>
    <input type="E-mail" name="E-mail" placeholder=" Enter your E-mail"/> <br> <br>
    <input type="submit"/>
  </form>
  `)
})



app.use(bodyParser.urlencoded());

app.post("/contect-us",(req,res,next)=>{
  console.log("contact us  for /post",req.url,req.method,req.body);
  res.send(`
    <h1>We will contact shortly</h1>
    `)
})
const Port=300;
app.listen(Port,()=>{
  console.log(`server is running on adress http://localhost:${Port}`)
})


