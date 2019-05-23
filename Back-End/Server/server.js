const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;
const bodyparser = require('body-parser')
const mysql = require('mysql');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
// to creare the connection
const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'wael2663520',
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
    
    res.send(result)
  })
});
// getting the meal from frondEnd and send the restauransts back 
app.post('/getRest',(req,res) =>{
  const mealName =req.body.restName;
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
    console.log(mealName,price)
    res.send(result)
  })
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
// To Create Tables fotm the server
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
var users =[];
app.get("/getUsers",(req,res)=>{
  let serchItem = 'SELECT * FROM meals';
 connection.query(serchItem,(err,result,next)=>{
    if(err) throw err;
    result.forEach(function(row){
      users.push(row.name);
    })
    console.log(users)
    res.json(users)
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




app.get('/',(req,res,next) => res.json({Start:"The First Get"}) );
  
module.exports = router;
app.listen(PORT, () => console.log("The Server is working on "+PORT));
