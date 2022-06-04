const router = require("express").Router();
let Topic = require("../models/Topic");
let Group = require("../models/Group");

const ObjectId = require("mongodb").ObjectID;

//filter function
router.route("/pm/:id").get(async(req,res)=> {
    let memberid = req.params.id;

    var query = { panelMemberId: memberid };
    var groupsOfPM = [];
    await Group.find(query).then(groups => {
        groupsOfPM = groups;
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error when fetching member groups", error : err.message});
    })

    var groupIds = [];
    groupsOfPM.forEach(group => {
        groupIds.push(group.groupID);
    });

    Topic.find({
        'GroupID': { $in: groupIds}
    })
    .then(topics => {

        let topicDetailDocs = [];
        let presentations = [];

        topics.forEach(function(topic){
            if (topic.state == 'topic-eval-pending'){
                topicDetailDocs.push(topic);
            }else if (topic.state == 'present-eval-pending'){
                presentations.push(topic);
            }
        });

        res.json({topicDetailDocs, presentations});
    })
    .catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error when fetching topics", error : err.message});
    });
})

//search function
router.route("/:id").get(async(req,res)=> {
    let topicid = req.params.id;

    await Topic.findById(topicid).then(topic => {
        res.json({topic});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user", error : err.message});
    })
})

router.route("/update").put(async(req,res)=> {
    let query = { _id: ObjectId(req.body.id) };
    var updatedValues = req.body;
    delete updatedValues.id;

    Topic.updateOne(query, { $set: updatedValues }, { upsert: true })
        .then(topic => {
        console.log(topic);
        res.json({ message: "Score updated successfully!", status: true });
        })
        .catch((err) => {
        console.error(err);
        res.json({ message: "something went wrong!", status: false });
        });
})

module.exports = router;