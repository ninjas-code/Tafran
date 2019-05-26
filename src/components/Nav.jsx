import React  from 'react';
import {NavLink} from 'react-router-dom';
// import {MealList} from 'mealsList.jsx'
// import React  from 'react';
// import {NavLink} from 'react-router-dom';

const Navgation =() =>{

    return(
        <div className="NaV">
         <NavLink  className="SignUp" to="/registered"><i class="fas fa-user-tie"></i>Sign Up</NavLink>
        <NavLink className="SignUp" to="/"><i class="fas fa-home"></i></NavLink>  
       </div>


    )


}

export default Navgation;
