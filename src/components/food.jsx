import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery'; 
import MealsList from './mealsList';

class Food extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Price: ''
    }
  }

  handelPriceChange(e) {
    this.setState({
      Price : e.target.value,
    });
    console.log(this.state.Price);
  }


  // sendPriceToServer(e) {
  //   var obj = {
  //     price: this.state.Price
  //   }
  //       var that=this;

  //       $.ajax({
  //         method: "POST",
  //         data: {
  //           obj
  //   },
  //         url: 'http://127.0.0.1:3000/price', 
  //         dataType: "application/json",
    
  //         success: (data) => {
  //           that.setState({
  //             items: data
  //           })
  //         },
  //         error: (err) => {
  //           console.log('err', err);
  //         }
  //       });
  //     } 
    sendPriceToServer(){

     const body= {price:this.state.Price};
     fetch('http://127.0.0.1:3000/price', {
       method:'post',
       body:JSON.stringify(body),
       headers:{"Content-Type" : "application/json"}
       
     })


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

      <button className="search" 
      onClick={this.sendPriceToServer.bind(this) }  >Search</button>
      </form>
     </header>
  
     </div>
  </BrowserRouter>
        )}
};

export default Food;