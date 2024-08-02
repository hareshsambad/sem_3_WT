const express = require('express');
const { write } = require('fs');

const app = express();

app.get('/home',(req,res)=>{
    console.log('This Is A Home');
    res.send("Home Page A")
})

app.get('/home/:name',(req,res)=>{
    const n = req.params.name;
    console.log(n);
    res.send("My Name Is " +n);
})

const arr = [
    {
        id:1,
        name:"John"
    
    },
    {
        id:2,
        name:"Doe"
    }

]

app.get('/arr',(req,res)=>{
    res.json(arr);
})

app.listen(3000,()=>{
    console.log("Server Strated : ")
})