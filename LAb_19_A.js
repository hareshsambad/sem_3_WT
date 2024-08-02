const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/home/demo',(req,res)=>{
    console.log('Demo FIle')
    fs.writeFileSync('demo.txt',"Hy Darshan University Student \n This File Is Demo")
    res.sendFile(path.join(__dirname,'demo.txt'));
})


app.get('/home/FileA',(req,res)=>{
    console.log('FileA');
    fs.writeFileSync('FileA.txt',"Hy Student \n This File Is A FIleA ")
    res.sendFile(path.join(__dirname,'FileA.txt'));
})


app.get('/home/FileB',(req,res)=>{
    console.log('FileB');
    fs.writeFileSync('FileB.txt',"This FIle Is FileB \n By")
    res.sendFile(path.join(__dirname,'FileB.txt'));
})

app.get('/home/deleteDemo',(req,res)=>{
    fs.unlink(path.join(__dirname,'demo.txt'),(err)=>{
        if(err){
            console.log(e);
        }
})
    res.send("File Demo Is Deleted")    
})

app.get('/home/deleteFileA',(req,res)=>{
    fs.unlink(path.join(__dirname,'FileA.txt'),(err)=>{
        if(err){
            console.log(e);
        }
})
    res.send("File FileA Is Deleted")    
})

app.get('/home/deleteFileB',(req,res)=>{
    fs.unlink(path.join(__dirname,'FileB.txt'),(err)=>{
        if(err){
            console.log(e);
        }
})
    res.send("File FileB Is Deleted")    
})

app.listen(3000,()=>{
    console.log("Server Strated : ");
})