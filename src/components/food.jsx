import React from 'react';
// import { BrowserRouter , Route} from 'react-router-dom';
import $ from 'jquery'; 

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


  sendPriceToServer(e) {
    var obj = {
      price: this.state.Price
    }
        var that=this;

        $.ajax({
          method: "POST",
          data: {
            obj
    },
          url: 'http://127.0.0.1:3000/price', 
          dataType: "application/json",
    
          success: (data) => {
            that.setState({
              items: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
      } 

    render(){
        return(
      <BrowserRouter>      
    <div className="App">
    
    <header className="App-header">
      <button>SXHOW/HIDE</button>

      <form method="POST">
      <h1 className="title">Put the Price</h1>
      <input className="Input" placeholder="in how mutch you want to eat" value= {this.state.Price} onChange={this.handelPriceChange.bind(this)} name="price"/>
      <button className="button" onClick={this.sendPriceToServer.bind(this)} >EAT</button>
      </form>
    </header>
  
  </div>
  </BrowserRouter>
        )}
};

export default Food;