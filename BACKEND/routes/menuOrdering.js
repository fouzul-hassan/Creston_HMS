const router = require("express").Router(); // import express dependancy
const { response } = require("express");
let MenuORDER = require("../models/MenuOrder"); //import FoodOrder.js file in model folder


// add a food order

//calling a url to execute the add method(route)
router.route("/add").post((req, res) => {
    //body of arrow function

    const menu_Id = req.body.menu_Id;
    const menu_name = req.body.menu_name; 
    const menu_type = req.body.menu_type;
    const no_of_plates = Number(req.body.no_of_plates);//casting
    const unit_price = Number(req.body.unit_price);
    const cus_name = req.body.cus_name;
    const cus_phone = req.body.cus_phone;
    const cus_email= req.body.cus_email;
    const cus_NIC = req.body.cus_NIC;
    const total_amount = Number(req.body.total_amount);

    // req.body.name means get a request from front end through a body to backend

    const newMenuOrder = new MenuORDER({
        menu_Id,
        menu_name,
        menu_type,
        no_of_plates,
        unit_price,
        cus_name,
        cus_phone,
        cus_email,
        cus_NIC,
        total_amount


    })

    // send this newFoodOrder object to database through the model using the save() function
    //javascript promises
    newMenuOrder.save().then(() => {
        res.json("New Food Order Added"); //send a response message using json format to the frontend,if the adding a student is successfully done
    }).catch((err) => {
        console.log(err);
    })//exception handling

})

//read foodOrder data

router.route("/").get((req, res) => {
    
    //display all details of food orders
    MenuORDER.find().then((menuOrders) => {
        res.json(menuOrders);
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
    const {menu_Id,menu_name,menu_type,no_of_plates,unit_price,cus_name,cus_phone,cus_email,cus_NIC,total_amount} = req.body;

    const updateMenuOrder = {
        menu_Id,
        menu_name,
        menu_type,
        no_of_plates,
        unit_price,
        cus_name,
        cus_phone,
        cus_email,
        cus_NIC,
        total_amount
    }

    //await - wait until promise comes and wait until previous process completes 

    const update = await MenuORDER.findByIdAndUpdate(orderId, updateMenuOrder).then(() => {
        res.status(200).send({status: "Order updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 
})

//delete a user

router.route("/delete/:id").delete(async (req, res) => {
    let orderId = req.params.id;

    await MenuORDER.findByIdAndDelete(orderId).then(() =>{
        res.status(200).send({status: "Order deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting order", error: err.message});
    })
})

//get details of one user

router.route("/get/:id").get(async(req, res) => {
    let orderId = req.params.id;
    const order = await MenuORDER.findById(orderId).then((menuOrders) => {
        res.status(200).send({status: "User fetched", menuOrders})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching order", error: err.message})
    })
})

module.exports = router;