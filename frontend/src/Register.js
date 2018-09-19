import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Button from '@material-ui/core/Button';


import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";



const styleBut = {
    width: 250/2,
  };

export default class Register extends React.Component {
    constructor(){
        super();
        this.state={
            email:'',
            nome:'',
            password:'',
            id_curso:'',
            semestre:'',
            cursos:[]
        }
    }
    

    getCursos = async() => {      
        let res = await fetch('/cursos', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({cursos: res})
        console.log(res)
    }

    cancelClick = (value) => {
        window.location.assign('/login');  
    };

    confirmClick = (value) => {
        fetch('/user', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "nome": this.state.nome,
                "senha": this.state.senha,               
                "id_curso": this.state.id_curso,
                "semestre": this.state.semestre
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(callback => {
            if(callback.status === "201"){
                window.location.assign('/main'); 
            }
            else if(callback.status === "500"){
                alert(callback.message)
            }
        })
    };

    componentDidMount(){
        this.getCursos()
    }
    
    render(){
        return(
            <div className = "Rbigbox">

                <div className = "header">
                    <div>Bio<span>Zerva</span></div>
                </div>
                
                <div class="register">
                
                    <input type="text" placeholder="Nome" onChange={e => this.setState({ nome: e.target.value })} ></input><br/>
                    <input type="password" placeholder="Senha" onChange={e => this.setState({ senha: e.target.value })}></input><br/>
                    <input type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value })}></input><br/>

                    <form autoComplete="off">
                    <FormControl style = {{minWidth: 250}} >
                    <InputLabel  htmlFor="age-simple">Curso</InputLabel>
                    <Select 
                        value={this.state.id_curso}
                        onChange={e => this.setState({ id_curso: e.target.value })}
                    >
                    {this.state.cursos.map((line, index) => {
                            return (
                                
                        <MenuItem value={line.id_curso}>{line.nome_curso}</MenuItem>
                            )
                    })}
                    </Select>
                    
                    </FormControl>    
                </form>

                    
                    
                    <input type="text" placeholder="Semestre" onChange={e => this.setState({ semestre: e.target.value })}></input><br/>

                    <Button variant="outlined" style={styleBut} onClick = {this.confirmClick} >Confirmar </Button>
                    <Button variant="outlined" style={styleBut} onClick = {this.cancelClick}>Cancelar</Button>
                
                </div>    
                
            </div>          
        );
    }
}