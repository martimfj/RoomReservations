import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Button from '@material-ui/core/Button';

const styleBut = {
    width: 250/2,
  };


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    registerClick = () => {
        window.location.assign('/register');  
    };
  
    handleClick(ev){
        console.log(this.state.email)
        fetch('/auth', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(callback => {
          
            if(callback.status === "200"){
                localStorage.setItem("email", callback.email)
                alert(callback.message)
                window.location.assign('/main'); 
            }
          
            else if(callback.status === "401"){
                alert(callback.message)
            }
        })

    }

    render(){
        return(
            <div className = "bigbox">

                <div className = "header">
                    <div>La<span>Lala</span></div>
                </div>
                
                <div class="login">
                    <input type="text" placeholder="Username" onChange={e => this.setState({ email: e.target.value })} ></input><br/>
                    <input type="password" placeholder="Password"  onChange={e => this.setState({ password: e.target.value })}></input><br/>
                    <Button variant="outlined" style={styleBut} onClick={(event) => this.handleClick(event)}>Login</Button>
                    <Button variant="outlined" style={styleBut} onClick = {this.registerClick}>Register</Button>
                </div>
                
            </div>  
           
        );
    }
}