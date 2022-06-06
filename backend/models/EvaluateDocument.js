const mongoose=require('mongoose')
const Schema=mongoose.Schema

const EvaluateDocument=new Schema({

    GroupId:{
        type:String,
        required:true
    },
    documentName:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    }


})

const EvaluateDoc=mongoose.model("Evaluated Documents",EvaluateDocument)
module.exports=EvaluateDoc