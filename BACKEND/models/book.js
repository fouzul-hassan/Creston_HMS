const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    RoomId:{
        type:String,
        required:true
    },

    RoomName:{
        type:String,
        required:true
    },
    RoomType:{
        type:String,
        required:true
    },
    RoomArea:{
        type:String,
        required:true
    },
    RoomDes:{
        type:String,
        required:true
    },
    Maxguest:{
        type:String,
        required:true
    },
    NoBeds:{
        type:String,
        required:true
    },
    Ac:{
        type:String,
        required:true
    },
    wifi:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Img: {
        type: String
    }

   


});

module.exports = mongoose.model('rooms',roomSchema);//db name rooms