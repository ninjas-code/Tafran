import React from "react";
import {browseRoute} from 'react-router-dom';


class register extends React.Component{
    render(){
        return(
            <div className="UserHeader">
            <form>  
            <h1 className="UserTitles"><i class="fas fa-user"></i> UserNamse</h1>
            <input type="text" className="UserInput" required/>
            <h1 className="UserTitles"><i class="fas fa-lock"></i> Passwords</h1>
            <input type="password" className="UserInput" required/>
            <h1 className="UserTitles"><i class="fas fa-map-marked-alt"></i> Location</h1>
            <input type="text" className="UserInput" required/>
            <h1 className="UserTitles"><i class="fas fa-mobile-alt"></i> Phone Number</h1>
            <input type="text" className="UserInput" required/>
            <h1 className="UserTitles"><i class="fas fa-dollar-sign"></i> Meals and The Price For every Meal</h1>
            <input type="text" className="UserInput" required/>
            <button type="submit" className="ButtonLog" >register</button>
            </form>
            </div>
            
        )
    }
} 
export default register;

