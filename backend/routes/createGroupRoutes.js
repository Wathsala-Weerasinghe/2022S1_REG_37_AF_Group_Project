const router = require("express").Router();
let Greg = require("../models/createGroups");

//create function
//http://localhost:8070/GrpReg/add
router.route("/add/group").post((req,res) => {

    const groupID = req.body.groupID;
    const groupName = req.body.groupName;
    const member1Name=req.body.member1Name;
    const member1ID  = req.body.member1ID;
    const member2Name=req.body.member2Name;
    const member2ID  = req.body.member2ID;
    const member3Name=req.body.member3Name;
    const member3ID  = req.body.member3ID;
    const member4Name=req.body.member4Name;
    const member4ID  = req.body.member4ID;
    

    const newGrp = new GrpReg({
        groupID,
        groupName,
        member1Name,
        member1ID,
        member2Name,
        member2ID,
        member3Name,
        member3ID,
        member4Name,
        member4ID
    })

    //search
      let term = req.body.searchTerm

    //pass the obj to mongo db
    newGrp.save().then(()=> {
        res.json("Grp Registration Added!") //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })

    if(term){
        GrpReg.find(findArgs)
        .find({$text:{$search: term}})
    }
})


//get method
//http://localhost:8070/GrpReg/c/

router.route("/c/").get((req,res)=>{
    GrpReg.find().then((GrpRegs)=> {
        res.json(GrpRegs) //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })
})

//search function
router.route("/get/:id").get(async(req,res)=> {
    let userid = req.params.id;

    const user = await GrpReg.findById(userid).then((GrpReg) => {
        res.status(200).send({status : "User Fetched",GrpReg})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user", error : err.message});
    })
})


module.exports = router;