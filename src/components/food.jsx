import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import MealsList from './mealsList';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Price: '',
      //   mealList:[
      //     { id: 'fdsd', title: 'Why is the sky blue?' },
      //     { id: 'adsf', title: 'Who invented pizza?' },
      //     { id: 'afdsf', title: 'Is green tea overrated?' },
      // ],
      dispalyMealList: false,
      meals: [],
      isHidden: true
    }
    // this.showMealList = this.showMealList.bind(this);
  }
  // showMealList(){
  //  this.setState({
  //   dispalyMealList:true
  //  });


  // }

  handelPriceChange(e) {
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
        <div className="App">

          <header className="App-header">

            <form>


              <input className="input"
                placeholder="Your Budget"
                value={this.state.Price}
                onChange={this.handelPriceChange.bind(this)}
                name="price" required />   <br></br>

              <button className="search"
                onClick={this.sendPriceToServer.bind(this)}    >submit your budjet</button><br></br>

              {/* {!this.state.isHidden && <MealsList meals ={[{name:'meal1',price:2, resturant: 'Bab-Alyamen'},{name:'meal2',price:4, resturant: 'Bab-Alyamen'},{name:'meal3',price:3, resturant: 'Jabri'},{name:'meal4',price:5, resturant: 'AAlya'}]} />} */}
              {this.state.dispalyMealList ?
                <MealsList meals={this.state.meals} /> :
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
                  return <tr key={i} onClick={() => alert(meal.mealName)}>

                    <td>{meal.restName}</td>
                    <td>{meal.mealName}</td>
                    <td>{" the price : "}</td>
                    <td>{meal.price}{'$'}</td>
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