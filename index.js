
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = ('./Schema')
const connectionString='mongodb://localhost:27017/Student'

mongoose.connect(connectionString).then(()=>{
    
    console.log('connected to database');
   
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}))

    app.get ('/students',async(req,res)=>{
        const answer = await schema.find();
        res.json(answer);
    })

    //getby Id

    app.get ('/students/:id',async(req,res)=>{
        const answer = await schema.findOne({id : req.params.id});
        res.json(answer);
    })
    //insert
    app.post('/students/add',async(req,res)=>{
        const answer = await schema(req.body);
        const ans = new schema.save();
        res.json(ans);
    })

// Update
app.patch('/students/:id', async (req, res) => {
    const ans = await schema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.json(ans);
  });
    //delete
    app.delete('/studentsdeletered',async(req,res)=>{
        const answer = await schema.deleteOne({id : req.params.id});
        res.json(answer);
    })
    
    app.listen(4000,()=>{
        console.log('server started')
    })
})