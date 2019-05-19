const db = require("../../Back-End/Server/server.js")
const SEQ = require('sequelize');
const express = require("express");
const router = express.Router();
router.get('/Home',(req,res) => res.send('It Work'))
const NewRs = db.define('NewRes',{
Name:{
    type:SEQ.STRING
},
location:{
    type:SEQ.STRING
},
Phone_Number:{
    type:SEQ.NUMBER
},
Food:{
    type:SEQ.STRING
},
Price:{
    type:SEQ.NUMBER
}
})
module.exports = router;
module.exports = NewRs;