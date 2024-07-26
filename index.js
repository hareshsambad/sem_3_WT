const express = require('express');

const app = express();

app.get('/home',(req,res)=>
{
    res.write('home')
    console.log('Inside A Home Page')
    res.end();
});



app.listen(6435,()=>
{
    console.log("Server Started : ")
})