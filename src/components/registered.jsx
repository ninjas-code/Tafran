import React from 'react';
import { browseRoute } from 'react-router-dom';

class register extends React.Component {
	constructor() {
		super();
		this.state = {
			UserName: '',
			Password: '',
			Location: '',
			PhoneNumber: '',
			Restaurant: '',
			PriceandMeal: '',
			UserNameErr: '',
			PasswordErr: '',
			LocationErr: '',
			PhoneNumberErr: '',
			PriceandMealErr: '',
			errors: {}
		};
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onClick(e) {
		e.preventdefault();
		const Users = {
			/// The Data For  The Users
			Username: this.state.UserName,
			Password: this.state.Password,
			Location: this.state.Location,
			PhoneNumber: this.state.PhoneNumber,
			Restaurant: this.state.Restaurant,
			PriceandMeal: this.state.PriceandMeal
		};
	}

	sendRestNameAndPrice(e, mealObj) {
		e.preventDefault();
		console.log(mealObj);
		fetch('http://localhost:5000/reg', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(mealObj)
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({
					resturants: data,
					dispalyMealList: false,
					displaRestList: true
				});
			});
	}

	handelUserChange(e) {
		this.setState({
			UserName: e.target.value,
			Password: e.target.value,
			Location: e.target.value,
			PhoneNumber: e.target.value,
			Restaurant: e.target.value,
			PriceandMeal: e.target.value
		});
		console.log(this.state.UserName);
	}

	UserVal = () => {
		let UserNameErr = '';
		let PasswordErr = '';
		let PriceandMealErr = '';

		if (!this.state.UserName.includes('@')) {
			UserNameErr = 'Invalid Email';
		}
		if (UserNameErr) {
			this.setState({ UserNameErr, PasswordErr, PriceandMealErr });
			return false;
		}
		return true;
	};

	inVokeUserVal = (event) => {
		event.preventDefault();
		this.UserVal();
	};

	render() {
		return (
			<div className="UserHeader">
				<form action="/registered" method="POST">
					<h1 className="UserTitles">
						<i class="fas fa-user" /> Email
					</h1>
					<input
						type="email"
						className="UserInput"
						name="UserName"
						onChange={this.handelUserChange.bind(this)}
						required
					/>
					<div>{this.state.UserNameErr}</div>
					<h1 className="UserTitles">
						<i class="fas fa-lock" /> Password
					</h1>
					<input
						type="password"
						name="Password"
						className="UserInput"
						onChange={this.handelUserChange.bind(this)}
						required
					/>
					<div>{this.state.PasswordErr}</div>
					<h1 className="UserTitles">
						<i class="fas fa-map-marked-alt" /> Location
					</h1>
					<input
						type="text"
						name="Location"
						className="UserInput"
						onChange={this.handelUserChange.bind(this)}
						required
					/>
					<h1 className="UserTitles">
						<i class="fas fa-mobile-alt" /> Phone Number
					</h1>
					<input
						type="text"
						name="PhoneNumber"
						className="UserInput"
						onChange={this.handelUserChange.bind(this)}
						required
					/>
					<h1 className="UserTitles">
						<i class="fas fa-store" /> The Restaurant
					</h1>
					<input
						type="text"
						className="UserInput"
						name="Restaurant"
						onChange={this.handelUserChange.bind(this)}
						required
					/>
					<h1 className="UserTitles">
						<i class="fas fa-dollar-sign" />Restaurant Info
					</h1>
					<input
						type="text"
						className="UserInput"
						name="PriceandMeal"
						onChange={this.handelUserChange.bind(this)}
					/>
					<div>{this.state.PriceandMealErr}</div>

					<button type="submit" className="ButtonLog">
						register
					</button>
				</form>
			</div>
		);
	}
}
export default register;
