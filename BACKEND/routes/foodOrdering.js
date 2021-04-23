const router = require("express").Router(); // import express dependancy
const { response } = require("express");
let FoodORDER = require("../models/FoodOrder"); //import FoodOrder.js file in model folder


// add a food order

//calling a url to execute the add method(route)
router.route("/add").post((req, res) => {
    //body of arrow function

    const food_Id = req.body.food_Id;
    const food_name = req.body.food_name; 
    const food_type = req.body.food_type;
    const food_package = req.body.food_package;
    const quantity = req.body.quantity;
    const unit_price = req.body.unit_price;
    const cus_name = req.body.cus_name;
    const cus_phone = req.body.cus_phone;
    const cus_email= req.body.cus_email;
    const cus_NIC = req.body.cus_NIC;
    const total_amount = req.body.quantity*unit_price;
    const req_date = req.body.req_date;

    // req.body.name means get a request from front end through a body to backend

    const newFoodOrder = new FoodORDER({
        food_Id,
        food_name,
        food_type,   
        food_package,
        quantity,
        unit_price,
        cus_name,
        cus_phone,
        cus_email,
        cus_NIC,
        total_amount,
        req_date


    })

    // send this newFoodOrder object to database through the model using the save() function
    //javascript promises
    newFoodOrder.save().then(() => {
        res.json("New Food Order Added"); //send a response message using json format to the frontend,if the adding a student is successfully done
    }).catch((err) => {
        console.log(err);
    })//exception handling

})

//read foodOrder data

router.route("/").get((req, res) => {
    
    //display all details of food orders
    FoodORDER.find().then((foodOrders) => {
        res.json(foodOrders);
    }).catch((err) => {
        console.log(err);
    })
})

//update food order

//async function - Async function always return a promise. Async function increase the responsiveness and performance of the web application

router.route("/update/:id").put(async(req, res) => {
    //req.params.id means fetching the id that comes as a parameter that comes from backend url
    //Variables declared with the let keyword can have Block Scope.Variables declared inside a block {} cannot be accessed from outside the block
    let orderId = req.params.id;

    //destructuring
    const {food_Id,food_name,food_type,package,quantity,unit_price,cus_name,cus_phone,cus_email,cus_NIC,req_date,total_amount=quantity*unit_price} = req.body;

    const updateFoodOrder = {
        food_Id,
        food_name,
        food_type,
        package,
        quantity,
        unit_price,
        cus_name,
        cus_phone,
        cus_email,
        cus_NIC,
        req_date,
        total_amount

    }

    //await - wait until promise comes and wait until previous process completes 

    const update = await FoodORDER.findByIdAndUpdate(orderId, updateFoodOrder).then(() => {
        res.status(200).send({status: "Order updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 
})

//delete a user

router.route("/delete/:id").delete(async (req, res) => {
    let orderId = req.params.id;

    await FoodORDER.findByIdAndDelete(orderId).then(() =>{
        res.status(200).send({status: "Order deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting order", error: err.message});
    })
})

//get details of one user

router.route("/get/:id").get(async(req, res) => {
    let orderId = req.params.id;
    const order = await FoodORDER.findById(orderId).then((foodOrders) => {
        res.status(200).send({status: "User fetched", foodOrders})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching order", error: err.message})
    })
})

module.exports = router;