const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
res.json("Router API is Working")
})



module.exports = router;