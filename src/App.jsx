import React from 'react';
import ReactDOM from 'react-dom'

import './App.css';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import Food from './components/food.jsx';
import Err from './components/404Page.jsx';
import Navgation from './components/Nav.jsx';
import Login from './components/login.jsx';



class App extends React.Component {
   /* <Route path="/test" component={test} />
    <Route path="/test1" component={Food} />*/ 

    
render(){
  return (
    <BrowserRouter>
    
    <div className="App">
      

      <Navgation></Navgation>
    <MealsList meals ={[{name:'meal1',price:2},{name:'meal2',price:4},{name:'meal3',price:3},{name:'meal4',price:5}]}/>
      <Switch>
      <Route path="/" component={Food} exact/>
      <Route path="/login" component={Login} exact/>
      <Route component={Err} exact/>
      </Switch>

      </div>
     
    </BrowserRouter>
  );
  }
}

export default App;
