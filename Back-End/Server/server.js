
const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;
const bodyparser = require('body-parser')
const mysql = require('mysql');
var expressValidator = require('express-validator');
const expressSession = require('express-session')
// const path = require('path');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(expressValidator({save:"Theapp",saveUninitialized:false,resave:false}));
// to creare the connection




const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:"1111",
   database: 'fdp'
});
const UsersConection = mysql.createConnection({
  host : 'localhost',
  user:'root',
  password:"1111",
 database: 'users'
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// getting the price from frontEnd and send the meals back
app.post('/getMealsByPrice',(req,res) =>{
  const price =req.body.price;
 
    let serchItem = `SELECT  m.name as mealName,r.name as restName,mt.size, price,r.id as restId
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
  const restId =req.body.restId;
    let serchItem = `SELECT r.name, phone, address
    FROM restaurants r
    Where r.Id = N'` + restId + `'`;
 
 connection.query(serchItem,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result)
 
  })
 
 });


// // to creare the connection
// const connection = mysql.createConnection({
//     host : 'localhost',
//     user:'root',
//     password:"1111",
//    database: 'fdp' // Change this to Your Data Base Name in Your My SQL Server - Qusai
// });

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
    Name:'Qusai',
    password:"1111",
    location:"Amman",
    phonenumber:"07765489",
    TheRestaurant:"YODu",
    MealsandPrice:'Hummus 5$'
  };
  const added = 'INSERT INTO usersInfo SET ?'
  connection.query(added,newRestaurant,(err,result)=>{
    if(err) throw err;
    console.log(result);
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
    console.log(users)
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

//////////////////////////////////////// USER AREA//////////////////////////
app.get('/registered',(req,res)=>{
  res.render('index',{title:"TheUserInfo",success:req.session.success,errors:req.session.errors});
  req.session.errors = null;
})
app.post('/registered', function(req, res,next) {
  const User =req.body.price;
  req.check('UserName',"Invald Email Plese Try Another One").isEmail();
  req.check('Password',"The Password Should be Numbers").isNumeric().isLength({min:8});
  var err = req.validationErrors();
  // if(err){
  //   // req.session.errors = err;
  //   // req.session.success = false;
  //   next();
  // }else{
  //   req.session.success = true ;
  // }
  
  let newRestaurant = {
    Name:req.body.UserName,
    password:req.body.Password,
    location:req.body.Location,
    phonenumber:req.body.PhoneNumber,
    TheRestaurant:req.body.Restaurant,
    MealsandPrice:req.body.PriceandMeal
  };
  const Check = `SELECT * From userInfo Where Name = ${req.body.UserName}`;
  const added = 'INSERT INTO usersInfo SET ?'

  console.log(Check)

  
  UsersConection.query(added,newRestaurant,(err,result)=>{
    console.log(newRestaurant)
    if(err) throw err;
    console.log(result);
    console.log("User Was Added")

  })
  // SEND EMAIL START


  const nodemailer = require("nodemailer");
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tafran56@gmail.com',
      pass: '12345678D!'
    },tls: {
      rejectUnauthorized: false
  }
  });
  
  var mailOptions = {
    from: 'tafran56@gmail.com',
    to: `${req.body.UserName}`,
    subject: 'TAFRAN.inc Registerd in TAFRAN',
    text: `Thank You For Registerd We Will Be in Toch With You Soon`,
    html: `<h1>Hi Smartherd</h1><p>Your Messsage</p>`        
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


  // SEND EMAIL END
  
res.redirect("http://localhost:3000/ThankYouPage")
});  

app.post("/login",function(req,res){
  console.log(req.body.UserName);
  const Find = 'select'`+re+`
  res.send("Hi");
})
  
  /////////////////////////////////////USER AREA END ////////////////////////////////////////

//app.get('/',(res,req) => res.sendfile('index.html'));

app.get('/',(req,res,next) => res.json({Start:"The First Get"}) );
  
module.exports = router;
app.listen(PORT, () => console.log("The Server is working on "+PORT));
