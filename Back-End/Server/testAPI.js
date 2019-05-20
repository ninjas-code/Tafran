const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
res.send("Router API is Working")
})



module.exports = router;