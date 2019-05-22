const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;
const bodyparser = require('body-parser')
const mysql = require('mysql');
const path = require('path');
const pino = require('express-pino-logger');
const Core = require('cors');
const testAPIRouter = require("./testAPI.js")
// const JSON = require('circular-json');
app.use(Core()); // to solve the Proxy Problem

app.use("/testAPP",testAPIRouter) // To Conact the Router to the server

/*This Solve the access to the server problem - qusai*/ 
app.use("http://localhost:3000/",function (req, res, next) {


  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');


  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


  res.setHeader('Access-Control-Allow-Credentials', true);

// Hi
  next();
});


app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
//   extended: true
// }));





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



// to creare the connection
const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:"1111",
   database: 'Users' // Change this to Your Data Base Name in Your My SQL Server - Qusai
});

// Create DB - qusai
app.get("/CRDATA",(req,res)=>{
  let sql = 'CREATE DATABASE if not exists Users'
  connection.query(sql,(err,result)=>{
    if(err){
      throw err
    };
    console.log(result);
    res.send("The Database was created successfully")
    console.log("Data Base Created")
    connection.end();

  });
});
//create table inside DB
app.get("/CRTable",(req,res)=>{
// To Create Tables fotm the server
  let CreateTable = `CREATE TABLE if not exists UsersInfo(
   id int primary key AUTO_INCREMENT,
   Name VARCHAR(255),
   Password int(255),
   Location VARCHAR(500),
   Phonenumber int,
   TheRestaurant VARCHAR(500),
   MealsandPrice VARCHAR(1000)
   )`
    connection.query(CreateTable,(err,result)=>{
      if(err) throw err;
     // console.log(result);
      console.log("Table Was Created On Successfully")
      res.send("Table Was Created")
    })
  });

  app.get("/price",(req,res)=>{
    res.send("Done")
  })

   // Create User Inside The Databasce /* TEST FOR ADMIN ACCOUNT*/
  app.get("/CN",(req,res)=>{
  let newRestaurant = {
    Name:'Qusai',
    Password:'123',
    Location:"Amman",
    PhoneNumber:"0776778219",
    TheRestaurant:"KFC",
    MealsandPrice:"Pizza 50"
  };
  const added = 'INSERT INTO UsersInfo SET ?'
  connection.query(added,newRestaurant,(err,result)=>{
    if(err) throw err;
    // console.log(result);
    res.send("User Was Added")

  })
})

// Search Into the database   and appear all the data /Qusai/
var users =[];
app.get("/getUsers",(req,res)=>{
  let serchItem = 'SELECT * FROM meals';
 connection.query(serchItem,(err,result,next)=>{
    if(err) throw err;
    result.forEach(function(row){
      users.push(row.name);
    })
   // console.log(users)
    res.json(users)
    });
});

// Search Into the database and appear all the data / Qusai/
app.get("/getoneUser",(req,res)=>{
  let serchItem = `
  SELECT * 
  FROM restaurants 
  WHERE id = 2
  `
  connection.query(serchItem,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result)

  });
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
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.post("/Price",urlencodedParser,function(req,res){
  if(!req.body) return res.sendStatus(400);
  console.log(req.body.Price)
  
  let serchItem = 'SELECT * FROM meals';
  connection.query(serchItem,(err,result,next)=>{
    if(err) throw err;
    result.forEach(function(row){
      if(row.id <= req.body.Price){
     // console.log("Hello im if")
      // console.log(row.id)
      users.push(row.id);
      // res.json(users)
      console.log("The Name is of the Restrunt is ",row.name ,"and the price is ",row.id)
      }
    })
    res.writeHead(301,
      {location:"http://localhost:3000/list"}
      )
      res.end();

    // console.log(users)
    //res.json(users)
    });


  // res.send("It Work")
})
// app.get('/',(req, res) => res.sendFile(path.join(__dirname,"../../public",'index.html')));
// To Send the requstes the to FrontEnd

// app.post('/')
router.get('/UU',(req,res,nxt)=>{
  res.json([{
    id:1 , 
    usernname:"Qusai"
  },{
    id:2,
    UserName:"James"
  }
]);
});
app.get('/TE',(req,res) => res.json({Second:"The Second GEt"}) );
app.post('/Q',(res,req) => req.json({Hi:"POST"}) );


//app.get('/',(res,req) => res.sendfile('index.html'));

app.get('/',(req,res,next) => res.json({Start:"The First Get"}) );
  
module.exports = router;
app.listen(PORT, () => console.log("The Server is working on "+PORT));
