import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

// import MealsList from './mealsList';

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
      Price : e.target.value,
    });
    console.log(this.state.Price);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  sendPriceToServer(e) {
    var obj = {
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