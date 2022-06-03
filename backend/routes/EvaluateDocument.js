const router=require('express').Router()
let EvaluateDoc=require('../models/EvaluateDocument')

//post student result
router.route("/submitEvaluated").post((req,res)=>{

    const GroupId=req.body.GroupId
    const documentName=req.body.documentName
    const grade=req.body.grade

    const newEvalDoc=new EvaluateDoc({
            
         GroupId,
         documentName,
         grade

    })

    newEvalDoc.save().then(()=>{
        res.json("Result saved")
    }).catch((err)=>{
        console.log(err)
    })

})



module.exports=router