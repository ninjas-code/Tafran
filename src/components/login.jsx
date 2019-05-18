import React from "react";
import {browseRoute} from 'react-router-dom';
import '../App.css';


class Login extends React.Component{
    render(){
        return(
            <div>
            <form className="Form">  
            <h1 className="UP">Signin</h1>
            <input type="text" required className="UserInfo" placeholder="UserName"/>
            <input type="password" required className="UserInfo" placeholder="Password"/>
            <button type="submit" className="button1">login</button>
            </form>
            </div>
            
        )
    }
}

export default Login;