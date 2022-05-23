const mongoose = require('mongoose');

const schema = mongoose.Schema;

const gRegSchema = new schema({
    groupID : {
        type : String,
        required : true //validate part
    },
    groupName: {
        type : String,
        required : true //validate part
    },
    member1Name: {
        type : String,
        required : true //validate part
    },
    member1ID: {
        type : String,
        required : true //validate part
    },
    member2Name: {
        type : String,
        required : true //validate part
    },
    member2ID: {
        type : String,
        required : true //validate part
    },
    member3Name: {
        type : String,
        required : true //validate part
    },
    member3ID: {
        type : String,
        required : true //validate part
    },
    member4Name: {
        type : String,
        required : true //validate part
    },
    member4ID: {
        type : String,
        required : true //validate part
    }
})

//table name GroupReg
const createGroups = mongoose.model("GroupReg",gRegSchema);

module.exports = createGroups;