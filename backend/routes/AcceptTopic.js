const router=require("express").Router()
let acceptTopics=require("../models/AcceptTopics")

//accept topic
router.route("/accept").post((req,res)=>{
    const GroupName=req.body.GroupName
    const GroupId=req.body.GroupId
    const tel=req.body.tel
    const TopicCategory=req.body.TopicCategory
    const TopicName=req.body.TopicName
    const Status=req.body.Status
    const Comment=req.body.Comment

    const newAccTopic=new acceptTopics({
        GroupName,
        GroupId,
        tel,
        TopicCategory,
        TopicName,
        Status,
        Comment
    })

    newAccTopic.save().then(()=>{
        res.json("Topic accepted")
    }).catch((err)=>{
        console.log(err)
    })

})

//reject topic
router.route("/reject").post((req,res)=>{
    const GroupName=req.body.GroupName
    const GroupId=req.body.GroupId
    const tel=req.body.tel
    const TopicCategory=req.body.TopicCategory
    const TopicName=req.body.TopicName
    const Status=req.body.Status
    const Comment=req.body.Comment

    const newAccTopic=new acceptTopics({
        GroupName,
        GroupId,
        tel,
        TopicCategory,
        TopicName,
        Status,
        Comment
    })

    newAccTopic.save().then(()=>{
        res.json("Topic accepted")
    }).catch((err)=>{
        console.log(err)
    })

})

//getAll
router.route("/").get((req,res)=>{
    acceptTopics.find().then((acceptTopics)=>{
        res.json(acceptTopics)
    }).catch((err)=>{
        console.log(err)
    })
})


//search
router.route("/:id").get((req,res)=>{

    acceptTopics.findById(req.params.id)
    .then(AcceptTopics=>res.json(AcceptTopics))
    .catch(err=> res.status(400).json('Error'+err))

})

module.exports=router