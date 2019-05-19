import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import $ from 'jquery'; 

class Food extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  handelPriceChange(e) {
    this.setState({
      id : e.target.value,
    });
    console.log(this.state.id);
  }


  sendPriceToServer(e) {
    var obj = {
      id: this.state.id
    }
        var that=this;

        $.ajax({
          method: "POST",
          data: {
          id: this.state.id
    },
          url: 'localhost:3000/price', 
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

      state={
        loading:true
      };
      async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const respon = await fetch(url);
        const data = await respon.json();
        console.log(data);
      }

























    render(){
        return(
      <BrowserRouter>      
    <div className="App">
    {this.state.loading ? <div> loading... </div> : <div>Restruant</div>}
    <header className="App-header">
      <button>SHOW/HIDE</button>

      <form method="POST">
      <h1 className="title">Put the Price</h1>
      <input className="Input" placeholder="in how mutch you want to eat" value= {this.state.id} onChange={this.handelPriceChange.bind(this)} name="id"/>
      <button className="button" onClick={this.sendPriceToServer.bind(this)} >EAT</button>
      </form>
    </header>
  
  </div>
  </BrowserRouter>
        )}
};

export default Food;