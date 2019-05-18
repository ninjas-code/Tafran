import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

class Food extends React.Component{
    render(){
        return(
      <BrowserRouter>      
    <div className="App">
    
    <header className="App-header">
      {/* <button>SHOW/HIDE</button> */}

      <form method="POST">
      <h1 className="title">Put the Price</h1>
      <input className="Input" placeholder="in how mutch you want to eat" name="price"/>
      <button className="button">EAT</button>
      </form>
    </header>
  
  </div>
  </BrowserRouter>
        )}
};

export default Food;