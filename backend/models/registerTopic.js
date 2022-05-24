const mongoose = require('mongoose');

const schema2 = mongoose.Schema;

const regSchema = new schema2({
    
    GroupName: {
        type : String,
        required : true //validate part
    },
    GroupID: {
        type : String,
        required : true //validate part
    },
    phone: {
        type : String,
        required : true //validate part
    },
    TopicCategory: {
        type : String,
        required : true //validate part
    },

    TopicName: {
        type : String,
        required : true //validate part
    }

})

//table name RegisterTopic
const registerTopic = mongoose.model("RegisterTopic",regSchema);

module.exports = registerTopic;