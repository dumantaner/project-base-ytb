const express = require("express");
const router = express.Router();

router.get("/:id",(req,res,next)=>{
res.json({
    body:req.body,
    parmas:req.params,
    query:req.query,
    headres:req.headers
})
});

module.exports=router;