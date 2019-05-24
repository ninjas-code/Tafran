import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import $ from 'jquery'; 
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
        meals: data,
        dispalyMealList: true
      })
    });
  }


  render() {
    return (
      <BrowserRouter>
      <img src="https://files.slack.com/files-pri/TGEHN6M8Q-FJZBQCXB2/free_sample_by_wix__2_.jpeg" />
        <div className="App">
          <header className="App-header">
            <form>
              <input className="input1"
                placeholder="Your Budget Here"
                value={this.state.Price}
                onChange={this.handelPriceChange.bind(this)}
                name="price" required />  

              <button className="search1"
                onClick={this.sendPriceToServer.bind(this)}    ><i class="fas fa-search"></i></button><br></br>



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
      <div className="TheMainInfo">{
        this.props.meals.length > 0 ?
          <table className="Tabel">
            <thead>
              <tr>
              <th className="MealsR"><i class="fas fa-utensils"></i>TheRestRunt</th>
                <th className="MealsR">Meal</th>
                {/* <th className="MealsR">Age</th> */}
                <th className="MealsR">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.meals.map((meal, i) => {
                  return <tr key={i} value={meal} onClick={(event) => this.props.sendRestNameAndPrice(event, meal)}>

                  {/* <i class="fas fa-utensils"></i> */}
                  <td className="MealsF">{meal.restName}</td>
                    <td className="MealsF">{meal.mealName}</td>
                    {/* <td className="MealsF">{" the price : "}</td> */}
                    <td className="MealsF">{meal.price}{' JD'}</td>
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
      <div className="TheMainInfo">{
        this.props.resturants.length > 0 ?
          <table >
            <thead>
              <tr>
                <th className="restaurnt4">Resturant Name</th>
                <th className="restaurnt4">Meal</th>
                <th className="restaurnt4">Address</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.resturants.map((resturant, i) => {
                  return <tr key={i} onClick={() => console.log("this is" + resturant.restName)}>

                    <td className="restaurnt5">{resturant.name}</td>
                    <td className="restaurnt5">{resturant.phone}</td>
                    <td className="restaurnt5">{resturant.address}</td>
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