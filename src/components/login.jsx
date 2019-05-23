import React from "react";
import {Link,Rooter} from 'react-router-dom';


class Login extends React.Component{

    

    render(){
        return(
            <div>
            <form>  
            <h1>UserNamse</h1>
            <input type="text" required/>
            <h1>Passwords</h1>
            <input type="password" required/>
            <button type="submit">login</button>
            </form>
            </div>
            
        )
    }
} 
export default Login;

