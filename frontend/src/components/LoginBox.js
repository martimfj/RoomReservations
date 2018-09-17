import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

const styleBut = {
    width: 5/2,
  };


class LoginBox extends React.Component{
    
    loginClick = () => {
        alert("Nao clique no Botao");
        window.location.assign('/main');  
    };

    registerClick = () => {
        window.location.assign('/register');  
    };
    
      render(){  

        return(
            <div className = "bigbox">
	                <input type="text" placeholder="Username" name="user" ></input><br/>
				    <input type="password" placeholder="Password" name="password"></input><br/>
				    <Button variant="outlined" style={styleBut} onClick = {this.loginClick}>Login</Button>
                    <Button variant="outlined" style={styleBut} onClick = {this.registerClick}>Register</Button>
                    
			</div>        
        );
    }  
}

export default LoginBox;
