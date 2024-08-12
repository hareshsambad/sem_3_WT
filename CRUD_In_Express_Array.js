const express = require('express');
const fs = require('fs');
const { url } = require('inspector');
const path = require('path');
const app = express();

arr = ['Haresh','Sambad','Darshan','Rajkot','Gujarat','India'];

// GetALl

app.get("/home",(req,res)=>{
    res.json(arr);
})

// GetId

app.get("/home/:id",(req,res)=>{
    const urlId = req.params.id;
    if(urlId >= 0 && urlId <arr.length)
    {
        res.json(arr[urlId]);
    }
    else
    {
        res.send("Id Not Found : ");
    }
    
})

// Add

app.post("/home/add/:name",(req,res)=>{
    const name = req.params.name;

    arr.push(name)
    res.json(arr);

})

    // Update

    app.patch("/home/update/:id/:name",(req,res)=>{
        const id = req.params.id;
        const name = req.params.name;

        arr[id] = name;
        res.json(arr);
    })

    // delete

    app.delete("/home/delete/:id",(req,res)=>{
        const id = req.params.id;
        arr.splice(id,1);
        res.json(arr);
    })

app.listen(5000,()=>{
    console.log("Server 5000 Started")
})