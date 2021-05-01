const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    name :{
        type : String,
        reqired : true
    },
    nic :{
        type : String,
        reqired : true
    },
    email :{
        type : String
    },
    address :{
        type : String
    },
    description :{
        type : String,
        reqired : true
    },
    phone :{
        type : String,
        reqired : true
    },
})

const employee = mongoose.model("employee",empSchema);

module.exports = employee;
