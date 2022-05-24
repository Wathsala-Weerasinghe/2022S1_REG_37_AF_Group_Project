//importing the packages by declaring variables
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();


//when running the program run on the avalable port OR the following port(8070)in our local computer 
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sandudb:sandu123@researchmanagementtool.fig68.mongodb.net/researchmanagementdb?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', function(){
  console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});

//assigned mongoose connection to an seperate variable
const connection = mongoose.connection;

//use arrow function
//open the connection
connection.once("open", () => {
console.log("Mongodb Connection Success!!");
})

//importing the confirm js file
const confRouter = require("./routes/createGroupRoutes.js");
const regRouter = require("./routes/reisterTopicRoutes.js");

//pass parameters to redirect the js file

app.use("/create", confRouter);
app.use("/register", regRouter);

//listen to the 8070 port
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port number : ${PORT}`)
})