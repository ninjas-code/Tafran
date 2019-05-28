const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;
const bodyparser = require('body-parser');
const mysql = require('mysql');
var expressValidator = require('express-validator');
const expressSession = require('express-session');
app.use(bodyparser.json());
app.use(
	bodyparser.urlencoded({
		extended: true
	})
);
app.use(expressValidator({ save: 'Theapp', saveUninitialized: false, resave: false }));

const connection = mysql.createConnection({
	host: 'sql7.freesqldatabase.com',
	user: 'sql7293367',
	password: 'syDLkTxPPN',
	database: 'sql7293367'
});
// HRLLO
const UsersConection = mysql.createConnection({
	host: 'sql7.freesqldatabase.com',
	user: 'sql7293367',
	password: 'syDLkTxPPN',
	database: 'sql7293367'
});

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
// getting the price from frontEnd and send the meals back
app.post('/getMealsByPrice', (req, res) => {
	const price = req.body.price;

	let serchItem =
		`SELECT  m.name as mealName,r.name as restName,mt.size, price,r.id as restId
    FROM restmealmenue rmm
    Inner Join restaurants r on (rmm.RestId = r.Id)
    Inner Join mealtype mt on (rmm.MealTypeId = mt.Id)
    Inner Join meals m on (mt.MealId = m.Id)
    Where price <= ` +
		price +
		` group by m.name, r.name, mt.size, price
    order by m.name, r.name, mt.size, price`;

	connection.query(serchItem, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});

// getting the meal from frondEnd and send the restauransts back
app.post('/getRest', (req, res) => {
	const restId = req.body.restId;
	let serchItem =
		`SELECT r.name, phone, address
    FROM restaurants r
    Where r.Id = N'` +
		restId +
		`'`;

	connection.query(serchItem, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});

// The connection made
connection.connect((err) => {
	if (err) {
		console.log('There is a error :', err);
	}
	console.log('The Conection made Successfully');
});

// THE SERVER
app.use(express.static('public'));

//////////////////////////////////////// USER AREA//////////////////////////
app.get('/registered', (req, res) => {
	res.render('index', { title: 'TheUserInfo', success: req.session.success, errors: req.session.errors });
	req.session.errors = null;
});
app.post('/registered', function(req, res, next) {
	const User = req.body.price;
	req.check('UserName', 'Invald Email Plese Try Another One').isEmail();
	req.check('Password', 'The Password Should be Numbers').isNumeric().isLength({ min: 8 });
	var err = req.validationErrors();

	let newRestaurant = {
		Name: req.body.UserName,
		password: req.body.Password,
		location: req.body.Location,
		phonenumber: req.body.PhoneNumber,
		TheRestaurant: req.body.Restaurant,
		MealsandPrice: req.body.PriceandMeal
	};
	const Check = `SELECT * From userInfo Where Name = ${req.body.UserName}`;
	const added = 'INSERT INTO usersInfo SET ?';

	console.log(Check);

	UsersConection.query(added, newRestaurant, (err, result) => {
		console.log(newRestaurant);
		if (err) throw err;
		console.log(result);
		console.log('User Was Added');
	});

	// SEND EMAIL START
	const nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'tafran56@gmail.com',
			pass: '12345678D!'
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	var mailOptions = {
		from: 'tafran56@gmail.com',
		to: `${req.body.UserName}`,
		subject: 'TAFRAN.inc Registerd in TAFRAN',
		text: `Thank You For Registerd We Will Be in Toch With You Soon`,
		html: `<h1 style="color:#000">TAFRAN.inc</h1>

    <h3 style="color:#000">Thank You For Registerd We Will Be in Toch With You Soon</h3>
    <h1 style="color:#000">More Info About TAFRAN App</h1>
    <h4 style="color:#000>This App Is to Make your life Easy when You order food You just Put in How much you want to eat and we will</br>
    take care of the rest we will give you famous restaurnts and none famous restaurnt how have meals under your Budget and You will pick Your favorite</h4></br>
    <h1 style ="color:#000">Add Your Restaurnt to our Applictaion</h1>
    <h4 style="color:#000">Your Restaurnt will Be Exposse To thousands of people every day and You can get benefit from this to get new customers and make your busness biger.</h4></br>
    <h1 style="color:#000">Whate the requirements to get your restarunt accsepted</h1>
    <h4 style="color:#000">All You need to have is good restarunt and have a good customer servers and our team will come to you to check every thing and you will be accspted </h4>
    `
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});

	// SEND EMAIL END

	res.redirect('http://localhost:3000/ThankYouPage');
});

app.post('/login', function(req, res) {
	console.log(req.body.UserName);
	const Find = 'select'`+re+`;
	res.send('Hi');
});

/////////////////////////////////////USER AREA END ////////////////////////////////////////

app.get('/', (req, res, next) => res.json({ Start: 'The First Get' }));

module.exports = router;
app.listen(PORT, () => console.log('The Server is working on ' + PORT));
