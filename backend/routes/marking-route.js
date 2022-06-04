const router = require("express").Router();
let Marking = require("../models/Marking");

//search function
router.route("").get(async(req,res)=> {
  let marking = {};
  await Marking.find().then(topics => {
      topics.forEach(function(item){
        if (item.type === 'Progress Marking Scheme') {
          marking.topicdetail = item.marking
        } else if (item.type === 'Proposal Presentation') {
          marking.presentation = item.marking
        }
      })

      res.json({marking});
  }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error when fetching marking schemes", error : err.message});
  })
})

module.exports = router;