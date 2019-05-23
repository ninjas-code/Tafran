import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "../App.css"


// Don't Touch this 
const url = "http://localhost:5000/"; 
fetch(url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Price: '',
      Name: '',
      dispalyMealList: false,
      displaRestList: false,
      meals: [],
      resturants: [],
      isHidden: true
    }
  }

  handelPriceChange(e) {
    this.setState({
      Price: e.target.value,
    });
    console.log(this.state.Price);
  }

  hande(e) {
    this.setState({
      Price: e.target.value,
    });
    console.log(this.state.Price);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  sendRestNameAndPrice(e, mealObj) {
    e.preventDefault();

    
    console.log(mealObj);

    fetch('http://localhost:5000/getRest', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mealObj)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        resturants:data,
        dispalyMealList: false,
        displaRestList: true
      })
    });

  }

  sendPriceToServer(e) {
    e.preventDefault();
    var body = {
      price: this.state.Price
    }
    console.log(body)

    fetch('http://localhost:5000/getMealsByPrice', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        meals:data,
       
        dispalyMealList: true
      })
    });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header className="App-header">

            <form>


              <input className="input"
                placeholder="Your Budget Here"
                value={this.state.Price}
                onChange={this.handelPriceChange.bind(this)}
                name="price" required />   <br></br>

              <button className="search"
                onClick={this.sendPriceToServer.bind(this)}    >submit your budget</button><br></br>



              {/* {!this.state.isHidden && <MealsList meals ={[{name:'meal1',price:2, resturant: 'Bab-Alyamen'},{name:'meal2',price:4, resturant: 'Bab-Alyamen'},{name:'meal3',price:3, resturant: 'Jabri'},{name:'meal4',price:5, resturant: 'AAlya'}]} />} */}
              {this.state.dispalyMealList ?
                <MealsList meals={this.state.meals} sendRestNameAndPrice={this.sendRestNameAndPrice.bind(this)} /> :
                null
              }

              {this.state.displaRestList ?
                <Resturant resturants={this.state.resturants} /> :
                null
              }

            </form>
          </header>

        </div>
      </BrowserRouter>
    )
  }
};

class MealsList extends React.Component {

  render(props) {

    return (
      <div>{
        this.props.meals.length > 0 ?
          <table >
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.meals.map((meal, i) => {
                  return <tr key={i} value={meal} onClick={(event) => this.props.sendRestNameAndPrice(event, meal)}>

                    <td>{meal.restName}</td>
                    <td>{meal.mealName}</td>
                    <td>{" the price : "}</td>
                    <td>{meal.price}{'$'}</td>
                  </tr>

                })
              }
            </tbody>
          </table> : 'Please, enter anothor price'

      }
      </div>
    )
  }
}


class Resturant extends React.Component {

  render(props) {

    return (
      <div>{
        this.props.resturants.length > 0 ?
          <table >
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.resturants.map((resturant, i) => {
                  return <tr key={i} onClick={() => console.log("this is" + resturant.restName)}>

                    <td>{resturant.name}</td>
                    <td>{resturant.phone}</td>
                    <td>{resturant.address}</td>
                  </tr>

                })
              }
            </tbody>
          </table> : null

      }
      </div>
    )
  }
}




export default Food;