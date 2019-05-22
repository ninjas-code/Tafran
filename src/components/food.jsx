import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import $ from 'jquery'; 
import "../App.css"
import { userInfo } from 'os';
import mealsList from "./mealsList.jsx"

// Don't Touch this /Qusai/
const url = "http://localhost:5000/"; 
fetch(url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

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

 // The User info Get it from the data base // Qusai
      state={
        error:null,
        loading:true,
        users:[],
        apiResponse:[]
        

      };
      // to updata the user info and put it in the front end // Qusai
      TheInfo=()=>{
        this.setState({
          apriResponse:[],
        })
      }
      
      // headers.append('Access-Cntrol-Allow-Origin','http://localhost:3000');
      // async
       componentDidMount(){
        fetch('/getUsers',{
        method:"GET",
        mode:'cors',
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
          'Content-Type':"application/json"
        },
        redirect:"follow",
        referrer:"no-referrer",
        body:JSON.stringify(this.state.apiResponse)
        })
        // to make it wor just change the json to text /Qusai/
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}))
        .catch(err => err);
      };
      componentWillMount(){
        this.componentDidMount();
      };


      
    render(){
      const {apiResponse,error}=this.state;
      if(error){
        return <div>{error.message}</div>
      }
        return(
      <BrowserRouter>      
    <div className="App">
    
    <header className="App-header">
      {console.log(apiResponse)}
      {this.state.loading || !this.state.Name ? (
    <div> <img className="lodding" src="https://cdn.dribbble.com/users/807926/screenshots/3629667/loadingtwo.gif"/></div> ):(
     <div>{this.state.Name}</div>
     )}
     <h1 className="title">Put the Price</h1>

      <form>
      <input className="Input" placeholder="in how mutch you want to eat" value= {this.state.id} onChange={this.handelPriceChange.bind(this)} name="id"/>
      <button className="button" onClick={mealsList} >EAT</button>
      {/* <p>This is coming from the data base {apiResponse}</p> */}
      {/* onClick={this.sendPriceToServer.bind(this)} */}
      </form>
    </header>
  
  </div>
  </BrowserRouter>
        )}
};

export default Food;

