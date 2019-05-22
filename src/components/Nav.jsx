import React  from 'react';
import {NavLink} from 'react-router-dom';
// import {MealList} from 'mealsList.jsx'
// import React  from 'react';
// import {NavLink} from 'react-router-dom';

const Navgation =() =>{

    return(
        <div>
        <div className="TheNav">
        <NavLink className="Nav" to="/login"><i className="fas fa-user-circle"></i>login</NavLink> 
       {/* <NavLink  className="Nav" to="/meals"></NavLink> */}
       <NavLink className="Nav" to="/" ><i class="fas fa-home"></i></NavLink>
       {/* <NavLink  className="Nav" to="/resturant">Shwo Resturants</NavLink> */}
       </div> 
       </div>


    )


}

export default Navgation