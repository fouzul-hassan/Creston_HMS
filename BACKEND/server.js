const express = require('express'); //take express dependency
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8070; //define port number

app.use(cors());
app.use(bodyParser.json()); // json - key value pairs

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

//Room
const roomRoutes= require('./routes/room');

app.use('uploads',express.static('uploads'))
app.use(roomRoutes);

//Employee
const empRouter = require("./routes/employees");

//Booking
const reservationRouter = require("./routes/Booking.js")

//Employee
app.use("/employee", empRouter)

//Booking
app.use("/booking",reservationRouter);

//Ordering
const foodOrderRouter = require("./routes/foodOrdering");

app.use("/foodOrdering", foodOrderRouter);

const menuOrderRouter = require("./routes/menuOrdering");

app.use("/menuOrdering", menuOrderRouter);

const beverageOrderRouter = require("./routes/beverageOrdering");

app.use("/beverageOrdering", beverageOrderRouter);

//Suppliers
const supplierRouter = require("./routes/suppliers");
app.use("/supplier", supplierRouter);

const itemRouter = require("./routes/items");
app.use("/item", itemRouter);

//inventory
const inventoryRouter = require("./routes/inventorys.js");
app.use("/inventory",inventoryRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})









