const mongoose = require('mongoose');

const schema = mongoose.Schema;

const regSchema = new schema({
    
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
    },
    state: {
        type : String,
        required : true //validate part
    },
    topicDetScore: {
        type : String,
        required : false
    },
    topicPresentScore: {
        type : String,
        required : false
    }
})

const topic = mongoose.model("registertopics",regSchema);

module.exports = topic;