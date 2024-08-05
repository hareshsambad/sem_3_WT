const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


const arr = [
    {
        "id":1,
        "name":"John"
    
    }

]


app.get('/arr/:id',(req,res)=>
{
    const urlId = req.params.id;
    const result = arr.find(e=>e.id==urlId);
    if(result)
    {
        res.json(result);
     
    }
    else
    {

        res.send("No Data Found : ");
        console.log("No Data Found : ");
    }
});

app.get('/arr',(req,res)=>{
    res.json(arr);
})







const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : true}))
app.post('/arr/add',(req,res)=>{
    const {id,name} = req.body;
    const result = 
    {
        "id" : id,
        "name" : name
    }
    arr.push(result);
    res.json(arr);
})









app.listen(4000,()=>{
    console.log("Server Strated : ");
})