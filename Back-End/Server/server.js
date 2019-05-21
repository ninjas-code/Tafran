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
/*This the Solve the access to the server problem - qusai*/ 
app.use("http://localhost:3000/",function (req, res, next) {


  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');


  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// to creare the connection
const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:"1111",
   database: 'restaurants'
});

// Create DB
app.get("/CRDATA",(req,res)=>{
  let sql = 'CREATE DATABASE if not exists restaurants'
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

  let CreateTable = `CREATE TABLE if not exists restaurants(
   id int primary key AUTO_INCREMENT,
   Name VARCHAR(255),
   address VARCHAR(255),
   Food VARCHAR(500),
   Phonenumber int
   )`
    connection.query(CreateTable,(err,result)=>{
      if(err) throw err;
      console.log(result);
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
    Name:'mac',
    address:"Amman",
    Food:"hamburger",
    Phonenumber:'07757231'
  };
  const added = 'INSERT INTO restaurants SET ?'
  connection.query(added,newRestaurant,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("User Was Added")

  })
})

// Search Into the database   and appear all the data
app.get("/getUsers",(req,res)=>{
  let serchItem = 'SELECT * FROM restaurants';
 connection.query(serchItem,(err,result,next)=>{
    if(err) throw err;
    console.log(result);
  //   var x = res.json(result)
  //  x.stringify();
   res.json(result)


  });
});

// Search Into the database and appear all the data
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

// app.get('/',(req, res) => res.sendFile(path.join(__dirname,"../../public",'index.html')));
// To Send the requstes the to FrontEnd

// app.post('/')
router.get('/',(req,res,nxt)=>{
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