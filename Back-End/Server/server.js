const express = require('express');
const app = express();
const PORT = 5000;
const bodyparser = require('body-parser')
const mysql = require('mysql');
// const path = require('path');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
// to creare the connection
const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:"Raed1992",
   database: 'fdp'
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// getting the price from frontEnd and send the meals back
app.post('/getMealsByPrice',(req,res) =>{
  const price =req.body.price;
  console.log(price)
    let serchItem = `SELECT  m.name as mealName,r.name as restName,mt.size, price
    FROM restmealmenue rmm
    Inner Join restaurants r on (rmm.RestId = r.Id)
    Inner Join mealtype mt on (rmm.MealTypeId = mt.Id)
    Inner Join meals m on (mt.MealId = m.Id)
    Where price <= ` + price  
    +` group by m.name, r.name, mt.size, price
    order by m.name, r.name, mt.size, price`;
 connection.query(serchItem,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result)
  })
});
// getting the meal from frondEnd and send the restauransts back 
app.post('/getRest',(req,res) =>{
  const mealName =req.body.name;
  const price =req.body.price;
  
    let serchItem = `SELECT r.name as restName,phone,address, m.name as mealName,mt.size, price
    FROM restmealmenue rmm
    Inner Join restaurants r on (rmm.RestId = r.Id)
    Inner Join mealtype mt on (rmm.MealTypeId = mt.Id)
    Inner Join meals m on (mt.MealId = m.Id)
    Where price <= ` + price  + ` and m.name = N'` + mealName 
    + `' group by m.name, r.name, mt.size, price
    order by m.name, r.name, mt.size, price`;
 connection.query(serchItem,(err,result)=>{
    if(err) throw err;
    console.log(result); 
    res.send(result)
  })
});
// The connection made
connection.connect((err)=>{
  if(err){
    console.log("There is a error :",err);
  }
  console.log("The Conection made Successfully");
});
// THE SERVER
app.use(express.static('public'))
app.listen(PORT, () => console.log("The Server is working on "+PORT));