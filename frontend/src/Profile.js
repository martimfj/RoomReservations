import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Grid from '@material-ui/core/Grid';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';


export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            id_user: 1,
            email:'11',
            nome:'',
            senha:'1111111',
            curso:'',
            semestre:'',
            reputacao:'',
        }

        this.editeProfileEmail    =  this.editeProfileEmail.bind(this);
        this.editeProfileNome     =  this.editeProfileNome.bind(this);
        this.editeProfileSenha    =  this.editeProfileSenha.bind(this);
        this.editeProfileCurso    =  this.editeProfileCurso.bind(this);
        this.editeProfileSemestre =  this.editeProfileSemestre.bind(this);
    }
    

    getProfile(){
        fetch('/user/1', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            this.setState({
                email:      result[0].email,
                nome:       result[0].nome,
                curso:      result[0].id_curso,
                semestre:   result[0].semestre,
                reputacao:  result[0].reputacao,
                
              });
        })
    
    }

    editeProfileEmail = async() =>{
        let res = await fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario":this.state.id_user,
                "email": this.state.email,
                 }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        alert(res.message)
        window.location.assign('/profile'); 
    
   
    };


    editeProfileNome = async() =>{
        let res = await fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario":this.state.id_user,
                "nome": this.state.nome,
                }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        alert(res.message)
        window.location.assign('/profile');
   
    };


    editeProfileSenha = async() =>{
        let res = await fetch('/user' , {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario":this.state.id_user,
                "senha": this.state.senha,               
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        alert(res.message)
        window.location.assign('/profile');
   
    };


    
    editeProfileCurso = async() =>{
        let res = await fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario":this.state.id_user,             
                "curso": this.state.curso,
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        alert(res.message)
        window.location.assign('/profile');
   
    };

    
    editeProfileSemestre = async() =>{
        let res = await fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario":this.state.id_user,             
                "semestre": this.state.semestre
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        alert(res.message)
        window.location.assign('/profile');
   
    };


    componentDidMount(){
        this.getProfile()
    }

    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                   <div>
                        <MenuAppBar/>
                        <div >
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Nome</InputLabel>
                                <Input
                                    value={this.state.nome}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            <Button variant="outlined" onClick = {this.editeProfileNome}>Save</Button>
                            
                            <br></br>
                            <br></br>
                            
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Email</InputLabel>
                                <Input
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </FormControl>
                            <Button variant="outlined" onClick = {this.editeProfileEmail}>Save</Button>

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Senha</InputLabel>
                                <Input
                                    type = 'password'
                                    value={this.state.senha}
                                    onChange={e => this.setState({ senha: e.target.value })}
                                />
                            </FormControl>
                            <Button variant="outlined" onClick = {this.editeProfileSenha}>Save</Button>

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Curso</InputLabel>
                                <Input
                                    value={this.state.curso}
                                    onChange={e => this.setState({ curso: e.target.value })}
                                />
                            </FormControl>
                            <Button variant="outlined" onClick = {this.editeCurso}>Save</Button>

                            <br></br>
                            <br></br>
                      
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Semestre</InputLabel>
                                <Input
                                    value={this.state.semestre}
                                    onChange={e => this.setState({ semestre: e.target.value })}
                                />
                            </FormControl>
                            <Button variant="outlined" onClick = {this.editeProfileSemestre}>Save</Button>
                        
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
} 
