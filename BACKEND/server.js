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

const foodOrderRouter = require("./routes/foodOrdering");

//when calling the student url, load student.js file which is assigned for the studentRouter variable
app.use("/foodOrdering", foodOrderRouter);

const menuOrderRouter = require("./routes/menuOrdering");

//when calling the student url, load student.js file which is assigned for the studentRouter variable
app.use("/menuOrdering", menuOrderRouter);

const beverageOrderRouter = require("./routes/beverageOrdering");

//when calling the student url, load student.js file which is assigned for the studentRouter variable
app.use("/beverageOrdering", beverageOrderRouter);
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})









