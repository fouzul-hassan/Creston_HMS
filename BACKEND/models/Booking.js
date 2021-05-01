const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    checkIn : {
        type : Date,
        required: true,
        unique: true
    },
    checkOut : {
        type : Date,
        required: true
    },
    noOfChildren : {
        type : Number,
        required: true
    },
    noOfAdult : {
        type : Number,
        required: true
    },
    fName : {
        type : String,
        required: true
    },
    lName : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    nat : {
        type : String,
        required: true
    },
    nic : {
        type : Number,
        required: true
    },
    passport : {
        type : Number,
        required: true
    },
    remarks : {
        type : String,
        required: true
    }
    
})



const Booking = mongoose.model('Booking',bookingSchema);

module.exports = Booking;