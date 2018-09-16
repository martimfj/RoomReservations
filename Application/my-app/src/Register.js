import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styleBut = {
    width: 350/2,
  };

export default class Register extends React.Component {
    constructor(){
        super();
        this.state={
            email:'',
            nome:'',
            password:'',
            curso:'',
            semestre:''
        }
    }
    

    cancelClick = (value) => {
        window.location.assign('/login');  
    };

    confirmClick = (value) => {
        fetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "nome": this.state.nome,
                "senha": this.state.senha,               
                "curso": this.state.curso,
                "semestre": this.state.semestre
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
    };
    
    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                   <div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <div className = "Rbigbox">
                            <input type="text" placeholder="Nome" onChange={e => this.setState({ nome: e.target.value })} ></input><br/>
                            <input type="password" placeholder="Senha" onChange={e => this.setState({ senha: e.target.value })}></input><br/>
                            <input type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value })}></input><br/>
                            <input type="text" placeholder="Curso" onChange={e => this.setState({ curso: e.target.value })}></input><br/>
                            <input type="text" placeholder="Semestre" onChange={e => this.setState({ semestre: e.target.value })}></input><br/>
                            
                            <Button variant="outlined" style={styleBut} onClick = {this.confirmClick} >Conirmar </Button>
                            <Button variant="outlined" style={styleBut} onClick = {this.cancelClick}>Cancelar</Button>
                            
                        </div>   
                    </div>
                </Grid>
            </Grid>
        );
    }
}