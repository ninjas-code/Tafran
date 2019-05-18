import React from 'react';
import './App.css';
import $ from 'jquery'; 
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import Food from './components/food.jsx';
import Err from './components/404Page.jsx';
import Navgation from './components/Nav.jsx';
import Login from './components/login.jsx';


class App extends React.Component {
render(){
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navgation className="Nav"></Navgation>

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
