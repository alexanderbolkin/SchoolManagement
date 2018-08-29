const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({

    school_id:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    week:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    elect_eur:{
        type:String,
        required:true
    },
    elect_kwh:{
        type:String,
        required:true
    },
    heating_eur:{
        type:String,
        required:true
    },
    heating_kwh:{
        type:String,
        required:true
    },
    water_eur:{
        type:String,
        required:true
    },
    water_litre:{
        type:String,
        required:true
    }
});


const Data = module.exports = mongoose.model('Data',DataSchema);