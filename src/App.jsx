import React from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Food from './components/food.jsx';
import Navgation from './components/Nav.jsx';
import register from './components/registered.jsx';
import ThankYouPage from './components/ThankYouPage.jsx';

class App extends React.Component {

render(){
  return (
    
    <div className="App">
     <BrowserRouter>
      <Navgation/>    
      <Route  path="/" component={Food} exact />
        
        <Route  path="/registered" component={register} exact />
        <Route path="/ThankYouPage" component={ThankYouPage} exact />    
     </BrowserRouter>
      </div>
  );
  }
}

export default App;