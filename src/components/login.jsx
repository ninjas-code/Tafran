import React from "react";
import {browseRoute} from 'react-router-dom';


class Login extends React.Component{
    render(){
        return(
            <div className="UserHeader">
            <form>  
            <h1 className="UserTitles"><i class="fas fa-user"></i> UserNamse</h1>
            <input type="text" className="UserInput" required/>
            <h1 className="UserTitles"><i class="fas fa-lock"></i> Passwords</h1>
            <input type="password" className="UserInput" required/>
            <button type="submit" className="ButtonLog" >login</button>
            <h5>don't have an account? you can <a href="http://localhost:3000/registere">register right Now</a></h5>
            </form>
            </div>
            
        )
    }
} 
export default Login;

