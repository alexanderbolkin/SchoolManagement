const mongoose = require('mongoose');


const SchoolSchema = mongoose.Schema({

    school_name:{
        type:String,
        required:true
    }
});


const School = module.exports = mongoose.model('School',SchoolSchema);