import React from 'react';
import { BrowserRouter  } from 'react-router-dom';

import MealsList from './mealsList';

class Food extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Price: '',
    //   mealList:[
    //     { id: 'fdsd', title: 'Why is the sky blue?' },
    //     { id: 'adsf', title: 'Who invented pizza?' },
    //     { id: 'afdsf', title: 'Is green tea overrated?' },
    // ],
      dispalyMealList:false,
      meals:[]
    }
    this.showMealList = this.showMealList.bind(this);
  }
  showMealList(){
   this.setState({
    dispalyMealList:true
   });


  }
  handelPriceChange(e) {
    this.setState({
      Price : e.target.value,
    });
    console.log(this.state.Price);
  }


  sendPriceToServer(e) {
    var obj = {
          price: this.state.Price
        }
    fetch('/price', {
      method: 'post',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(obj)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log( data);
      this.setState({meals:data.meals})
    });
  }
  

    render(){
        return(
      <BrowserRouter>      
    <div className="App">
    
    <header className="App-header">
     
      <form method="POST">
      
      
      <input className="input" 
      placeholder="Your Budget" 
      value= {this.state.Price} 
      onChange={this.handelPriceChange.bind(this)} 
      name="price"/>

      {/* <button className="search" 
      onClick={this.sendPriceToServer.bind(this) }   >Search</button> */}
        <button className="search" 
        onClick={this.showMealList}>Search</button>
        {this.state.dispalyMealList ?
           <MealsList meals={this.state.meals}/> :
           null
        }
      </form>
     </header>
  
     </div>
  </BrowserRouter>
        )}
};

export default Food;