// <<<<<<< HEAD
// const express = require("express");
// const Router = express.Router();
// module.exports = Router;
// =======
const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
res.json({"HI":"Hi"})
})
router.post("/registered",(req,res,next)=>{
    res.send("Hello")
    })
    



module.exports = router;
// const express = require("express");
// const Router = express.Router();
// module.exports = Router;
