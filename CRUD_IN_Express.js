const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


arr = [
    {
        "id":"1",
        "name":"John"
    
    },
    {
        "id":"2",
        "name":"liao"
    
    },
    {
        "id":"3",
        "name":"veris"
    
    }

]

// Write

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : false}))
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

// READ

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

// DELETE

app.delete('/arr/dlt/:id',(req,res)=>{
    const urlId = req.params.id;

    const result = arr.find(e => e.id===urlId);
    if(result)
    {
        newArray = arr.filter(e => e.id != urlId)
        res.json(newArray)
    }
    else{
        res.send("A Is Not Found");
    }
})


// UPADATE

app.patch('/arr/patch/:id',(req,res)=>{

    const {id} = req.params;
    const {name} = req.body;
    const result = arr.find(e => e.id == id);
    if(result)
    {
        result.name = name;
        res.json(arr);
    }
    else{
        res.json("A Is Not Found");
    }
})

app.get('/arr',(req,res)=>{
    res.json(arr);
})
















app.listen(4000,()=>{
    console.log("Server Strated : ");
})