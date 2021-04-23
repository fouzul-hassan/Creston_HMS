const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//In mongodb, when create an object, a object Id is created automatically

const BeverageOrderSchema = new Schema({
    bev_Id : {
        type: String,
        required: true
    },
    bev_name : {
        type: String,
        required: true
    },
    bev_type :{
        type: String,
        required : true
    },
    quantity:{
        type: Number,
        required : true
    },
    unit_price :{
        type: Number,
        required : true
    },
    cus_name :{
        type: String,
        required : true
    },
    cus_phone :{
        type: String,
        required : true
    },
    cus_email :{
        type: String,
        required : true
    },
    cus_NIC :{
        type: String,
        required : true
    },
   total_amount :{
        type: Number,
        //required : true
    },
    req_date :{
        type: String,
        required : true
    }

})

const BeverageOrder = mongoose.model("BeverageOrder", BeverageOrderSchema);

module.exports = BeverageOrder;