import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Food from './components/food.jsx';
import Navgation from './components/Nav.jsx';
import Login from './components/login.jsx';
import register from './components/registered.jsx';
import ThankYouPage from './components/ThankYouPage.jsx';
import WeclomePage from './components/WelcomePage.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Navgation />
					<Route path="/" component={WeclomePage} exact />
					<Route path="/Home" component={Food} exact />
					<Route path="/login" component={Login} exact />
					<Route path="/registered" component={register} exact />
					<Route path="/ThankYouPage" component={ThankYouPage} exact />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
