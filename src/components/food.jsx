import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import $ from 'jquery'; 
import "../App.css"
import { userInfo } from 'os';

// var APP = React.createClass();

var x = [];
// Don't Touch this /Qusai/
const url = "http://localhost:5000/"; 
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
      // The User info Get it from the data base // Qusai
      state={
        loading:true,
        users:[],
        id:"",
        Name:"",
        address:"",
        Food:"",
        Phonenumber:""

      };
      // to updata the user info and put it in the front end // Qusai
      TheInfo=()=>{
        this.setState({
          apiResponse:"",
          // id:this.state.id,
          // Name:this.state.Name,
          // address:this.state.address,
          // Food:this.state.Food,
          // Phonenumber:this.state.Phonenumber
        })
      }
      
      // headers.append('Access-Cntrol-Allow-Origin','http://localhost:3000');
      // async
       componentDidMount(){
        fetch('/getUsers')
        // to make it wor just change the json to text /Qusai/
        .then(res => res.json())
        .then(res => this.setState({apiResponse:res}))
        .catch(err => err);
        ///////////////////////////////////////////////////
        // const url = "http://localhost:5000/getUsers";
        // const respon = await fetch(url);
        // const data = await respon.json();
        // this.setState({Name:data.results,loading:false})

        /////////////////////////////////////////////////////////
        // fetch('http://localhost:3001/')
        // .then(resopn=>console.log(resopn))
        // .then(({response})=>this.setState({Name:"response.Name"}))
      };
      componentWillMount(){
        this.componentDidMount();
      };


      
    render(){
        return(
      <BrowserRouter>      
    <div className="App">
    
    <header className="App-header">
      {/* { {this.Name.map(this.showUsers)} } */}

      {/* {console.log(x.map(function(e){console.log(e)}))} */}
      {this.state.loading || !this.state.Name ? (
    <div> <img className="lodding" src="https://cdn.dribbble.com/users/807926/screenshots/3629667/loadingtwo.gif"/></div> ):(
     <div>{this.state.Name}</div>
     )}
      <form method="POST">
        {/* This line is still under development Plese Don't Change any thing /Qusai/ */}
        <p>This is coming from the data base {Object.values(this.state.apiResponse)}</p>
        {/* {this.state.apiResponse.map(function(ele){
          return(
            <div>
            <h1>{ele.Name}</h1>
            </div>
          )
        })} */}
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