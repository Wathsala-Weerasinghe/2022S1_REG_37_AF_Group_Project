const mongoose = require('mongoose');

const schema = mongoose.Schema;

const GroupSchema = new schema({
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
    },
    panelMemberId: {
        type : String,
        required : true //validate part
    }
})

//table name Group
const group = mongoose.model("groupregs",GroupSchema);

module.exports = group;