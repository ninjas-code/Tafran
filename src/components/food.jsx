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
   
      Price: '',
    //   mealList:[
    //     { id: 'fdsd', title: 'Why is the sky blue?' },
    //     { id: 'adsf', title: 'Who invented pizza?' },
    //     { id: 'afdsf', title: 'Is green tea overrated?' },
    // ],
      dispalyMealList:false,
      meals:[],
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
      id : e.target.value,
    });
    console.log(this.state.id);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
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
        fetch('/getoneUser')
        // to make it wor just change the json to text /Qusai/
        .then(res => res.text())
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

=======
          price: this.state.Price
        }


    fetch('/getMealsByPrice', {
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

     
      <form>
      
      
      <input className="input" 
      placeholder="Your Budget" 
      value= {this.state.Price} 
      onChange={this.handelPriceChange.bind(this)} 
      name="price" required />   <br></br>
    
      <button className="search" 
      onClick={this.sendPriceToServer.bind(this) } onClick={this.toggleHidden.bind(this)}   type="submit">submit your budjet</button><br></br>
        
        {!this.state.isHidden && <MealsList meals ={[{name:'meal1',price:2, resturant: 'Bab-Alyamen'},{name:'meal2',price:4, resturant: 'Bab-Alyamen'},{name:'meal3',price:3, resturant: 'Jabri'},{name:'meal4',price:5, resturant: 'AAlya'}]} />}
        {/* {this.state.dispalyMealList ?
            <MealsList meals ={[{name:'meal1',price:2, resturant: 'Bab-Alyamen'},{name:'meal2',price:4, resturant: 'Bab-Alyamen'},{name:'meal3',price:3, resturant: 'Jabri'},{name:'meal4',price:5, resturant: 'AAlya'}]} /*meals={this.state.meals}*/ 
         // null
        }  
      </form>
     </header>
  
     </div>
  </BrowserRouter>
        )}
};

class MealsList extends React.Component {

  render(props){
    
      return(
          <div>{
            this.props.meals.length > 0 ?
              
              <ul>
              {
                this.props.meals.map(meal=>{
                  return <li onClick={()=>alert(meal.name)}>
                {meal.name} { " the price : "} {meal.price}{'$'}
                </li> 
                  })
                }
              {/* {props.items.map((item, index) => (
                <il key={index} item={item} />
              ))} */}
              </ul>:null
            
        }
          </div>
      )
    }
  }


export default Food;