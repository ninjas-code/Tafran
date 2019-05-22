import React from 'react';
import { BrowserRouter , Route,Link,Switch} from 'react-router-dom';
import $ from 'jquery'; 
import "../App.css"
import { userInfo } from 'os';

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

     class ThelistFood extends React.Component{ 
    render(){
        let text ,
        {location} = this.props
        switch(location.pathname){
            case '/':{
                text="Home"
                break
            }
            case '/S1':{
                text="Hi From Text"
                break
            }
        }
      return(
      <BrowserRouter>  
      ${text}
    
    <div className="App">
    
    <header className="App-header">
      <h1>HI From the List</h1>
      <bottom className="backbutton" ><i class="fas fa-home"></i></bottom>
      <BrowserRouter className="Nav" to="/login"><i className="fas fa-user-circle"></i></BrowserRouter>
      <div className="FoodList">
      <h1>The List of Meals</h1>   
      <ul className="ulFood">  
      <i class="fas fa-utensils"></i><li className="TheFood">Hummmus</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Manakeesh</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Foul Meddamas</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood">Tabouleh</li>

      </ul>
      <ul className="ulFood1">  
      <i class="fas fa-utensils"></i><li className="TheFood1">Hummmus</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Manakeesh</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Foul Meddamas</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Tabouleh</li>
      <i class="fas fa-utensils"></i><li className="TheFood1">Tabouleh</li>

      </ul>
      <p className="feedBackPara">if you have a meal in your mind just Tell us To add it</p>
      
      <button className="feedBackButton"><i class="fas fa-plus"></i></button>


      </div>


    </header>
  
  </div>
  </BrowserRouter>
      
      
      
      
      )}}

export default ThelistFood;

