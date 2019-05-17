import React from 'react';
import ReactDOM from 'react-dom'
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import $ from 'jquery'; 


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Price: "",
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handlePriceChange (e) {
    console.log(e.target.value)
    this.setState({
     Price : e.target.value,
    });

  }

  sendPriceToServer(e) {
    console.log(this.state.Name)
    
    var obj = {
      name: this.state.Price
    }
        var that=this;
        $.ajax({
          method: "POST",
          data: {
      name: this.state.Price
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
  return (
    <div className="App">
      <header className="App-header">
        <form method="POST">
        <h1 className="title">Put the Price</h1>
        <input className="Input" placeholder="in how mutch you want to eat" name="price"/>
        <button className="button">EAT</button>
        </form>
      </header>
    </div>
  );
  }
}

export default App;
