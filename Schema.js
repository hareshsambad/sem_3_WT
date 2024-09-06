const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        name:String,
        id:String,
        roll:String,
        enroll:String,
        spi:String,
        branch:String
    }
)

module.export=mongoose.model('Schema',schema);