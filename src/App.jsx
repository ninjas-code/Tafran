import React from 'react';
//import ReactDOM from 'react-dom';

import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Food from './components/food.jsx';
// import Err from './components/404Page.jsx';
//import Navgation from './components/Nav.jsx';
// import Login from './components/login.jsx';
 //import MealsList from './components/mealsList.jsx';
// import Resturant from './components/resturant';



class App extends React.Component {
  
//   state = {
//     questions: [
//        { id: 'fdsd', title: 'Why is the sky blue?' },
//        { id: 'adsf', title: 'Who invented pizza?' },
//        { id: 'afdsf', title: 'Is green tea overrated?' },
//     ],
//        displayQuestions: false
// }
    
render(){
  return (
    <BrowserRouter>
    
    <div className="App">
      
      
    

    {/* <MealsList meals ={[{name:'meal1',price:2},{name:'meal2',price:4},{name:'meal3',price:3},{name:'meal4',price:5}]}/> */}
      
      <Route  path="/" component={Food} exact />
      {/* { <Route  path="/login" component={Login} exact /> */}
       {/* <Route  path="/meals" render={(props) => */}
        {/* <MealsList meals ={[{name:'meal1',price:2, resturant: 'Bab-Alyamen'},{name:'meal2',price:4, resturant: 'Bab-Alyamen'},{name:'meal3',price:3, resturant: 'Jabri'},{name:'meal4',price:5, resturant: 'AAlya'}]} />  */}

        {/* <Route  path="/resturant" render={(props) =>
       <Resturant meals ={[{name:'meal1',price:2, resturant: 'Hbiba'},{name:'meal2',price:4, resturant: 'Bab-Alyamen'},{name:'meal3',price:3, resturant: 'Jabri'},{name:'meal4',price:5, resturant: 'AAlya'}]}/> } />       */}

      {/* <Route component={Err} exact /> */}
      
      </div>
     
    </BrowserRouter>
  );
  }
}

export default App;
