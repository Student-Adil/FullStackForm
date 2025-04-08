//core module
import path from 'path';


import connectDB from './db.js';

import express from 'express';
//local module
import userRouter from './routes/user.js';
import { hostRouter } from './routes/host.js';
// const rooDir=require('./public')
import rooPath from './utils/path.js';

const app = express();

app.use(userRouter); // home page kei liya ha yei 
app.use(express.urlencoded()); // Replaced bodyParser with express
app.use(hostRouter);

app.use(express.static(path.join(rooPath, "public"))); //css
app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(rooPath, "views", "404.html"));
});

const PORT = 2000;
app.listen(PORT, () => {
  connectDB();
  console.log("MongoDB connected success"); // Fixed typo in "success"
  console.log(`Server is running on adrsess http//:localhost:${PORT}`);
});

