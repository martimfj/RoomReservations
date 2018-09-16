import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import LoginBox from './components/LoginBox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styleBut = {
    width: 350/2,
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
        fetch('/login', {
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
                window.location.assign('/main'); 
            }
            else if(callback.status === "500"){
                alert(callback.auth)
            }
        })

    }

    /*
    async login(){
        let res = await fetch('/login')
        res = await res.json()  
    }*/
    
    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                   <div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <div className = "bigbox">
	                        <input type="text" placeholder="Username" onChange={e => this.setState({ email: e.target.value })} ></input><br/>
				            <input type="password" placeholder="Password"  onChange={e => this.setState({ password: e.target.value })}></input><br/>
				            <Button variant="outlined" style={styleBut} onClick={(event) => this.handleClick(event)}>Login</Button>
                            <Button variant="outlined" style={styleBut} onClick = {this.registerClick}>Register</Button>
			            </div>  
                    </div>
                </Grid>
            </Grid>
        );
    }
}