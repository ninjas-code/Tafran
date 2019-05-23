import React  from 'react';
import {NavLink} from 'react-router-dom';
// import {MealList} from 'mealsList.jsx'
// import React  from 'react';
// import {NavLink} from 'react-router-dom';

const Navgation =() =>{

    return(
        <div>
         <NavLink to="/login">login as admin</NavLink> <br></br>
        <NavLink to="/">home</NavLink>  
       </div>


    )


}

export default Navgation;
