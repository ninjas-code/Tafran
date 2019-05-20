import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import $ from 'jquery'; 
import "../App.css"


// Don't Touch this /Qusai/
const url = "http://localhost:3001/"; 
fetch(url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))



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
              items: data,
              personr:null
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
      } 

      


      

    

      state={
        loading:true,
        name:null
      };
      // headers.append('Access-Cntrol-Allow-Origin','http://localhost:3000');
      async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const respon = await fetch(url);
        const data = await respon.json();
        this.setState({name:data.results[0],loading:false})
      }

    render(){
        return(
      <BrowserRouter>      
    <div className="App">
    
    <header className="App-header">
      {/* <button>SHOW/HIDE</button> */}
      {this.state.loading || !this.state.name ? (
    <div> <img className="lodding" src="https://cdn.dribbble.com/users/807926/screenshots/3629667/loadingtwo.gif"/>loading... </div> ):(
     <div>{this.state.name.name.first}</div>
     )}
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