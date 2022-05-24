const router = require("express").Router();
let Register = require("../models/registerTopic");

//create function
//http://localhost:8070/register/add
router.route("/add/reg").post((req,res) => {

    const GroupName = req.body.GroupName;
    const GroupID = req.body.GroupID;
    const phone=req.body.phone;
    const TopicCategory  = req.body.TopicCategory;
    const TopicName = req.body.TopicName;

    const newReg = new Register({
        GroupName,
        GroupID,
        phone,
        TopicCategory,
        TopicName
    })

    //search
      let term = req.body.searchTerm

    //pass the obj to mongo db
    newReg.save().then(()=> {
        res.json("Topic registration Added!") //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })

    if(term){
        Register.find(findArgs)
        .find({$text:{$search: term}})
    }
})


//get TopicCategory
//http://localhost:8070/Register/c/

router.route("/c/").get((req,res)=>{
    Register.find().then((Registers)=> {
        res.json(Registers) //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })
})



//delete TopicCategory
//async fun is wait for a response
router.route("/delete/:id").delete(async(req,res) => {
let userid = req.params.id;

await Register.findByIdAndDelete(userid).then(() => {
    res.status(200).send({status : "User Deleted"})
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", error : err.message});
})
})


//search function
router.route("/get/:id").get(async(req,res)=> {
    let userid = req.params.id;

    const user = await Register.findById(userid).then((Register) => {
        res.status(200).send({status : "User Fetched",Register})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user", error : err.message});
    })
})


module.exports = router;