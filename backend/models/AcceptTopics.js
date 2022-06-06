const mongoose=require('mongoose')
const Schema=mongoose.Schema

const AcceptTopics=new Schema({

    GroupId:{
        type: String,
        required: true
    },
    TopicName:{
        type: String,
        required: true
    },Status:{
        type: String,
        required: true
    },Comment:{
        type: String,
        required: true
    }

}) 

const acceptTopics=mongoose.model("AcceptedTopics", AcceptTopics)
module.exports=acceptTopics