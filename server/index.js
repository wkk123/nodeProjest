import express from 'express';

let app = express();

app.get('/',(req,res)=>{
  res.send('hello word');
})

app.listen(6060,()=> console.log('Running on localhost:6060'))