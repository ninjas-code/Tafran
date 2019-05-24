import React from "react";
// import {browseRoute} from 'react-router-dom';


class register extends React.Component{
    constructor(){
        super();
        this.state={
            UserName:"",
            Password:"",
            Location:"",
            PhoneNumber:"",
            Restaurant:"",
            PriceandMeal:"",
            errors:{}

        }
       
    }
    
    render(){
        return(
            <div className="UserHeader">
            <form action="/login" method="POST">  
            <h1 className="UserTitles" ><i class="fas fa-user"></i> UserName</h1>
            <input type="email" className="UserInput"  name="UserName"/>
            <h1 className="UserTitles" ><i class="fas fa-lock"></i> Password</h1>
            <input type="password"  name="Password" className="UserInput"/>
            

            <button type="submit" className="ButtonLog" >register</button>
            </form>
            </div>
            
        )
    }
} 
export default register;

