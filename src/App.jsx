import React from 'react';
import ReactDOM from 'react-dom'
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import $ from 'jquery'; 
import { BrowserRouter , Route} from 'react-router-dom';
import Food from './components/food.jsx';


class App extends React.Component {
   /* <Route path="/test" component={test} />
    <Route path="/test1" component={Food} />*/ 
render(){
  return (
    <BrowserRouter>
    
    <div className="App">
      <Route path="/" component={Food} />
      </div>
     
    </BrowserRouter>
  );
  }
}

export default App;
