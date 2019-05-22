import React  from 'react';
import {NavLink} from 'react-router-dom';
// import {MealList} from 'mealsList.jsx'
// import React  from 'react';
// import {NavLink} from 'react-router-dom';

const Navgation =() =>{

    return(
        <div>
        <div className="TheNav">
        <NavLink className="Nav" to="/login">login as admin</NavLink> 
       <NavLink  className="Nav" to="/meals">show meals</NavLink>
       <NavLink  className="Nav" to="/resturant">Shwo Resturants</NavLink>
       </div> 
       </div>


    )


}

export default Navgation