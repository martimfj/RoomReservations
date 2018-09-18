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
            id_user:1,
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

    editeProfileEmail(){
        fetch('/profile/' + this.state.id_user, {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                 }),
            headers: {"Content-Type": "application/json"}
        })
        window.location.assign('/profile/' + this.id_user);
    };


    editeProfileNome(){
        fetch('/profile/' + this.state.id_user, {
            method: 'POST',
            body: JSON.stringify({
                "nome": this.state.nome,
                }),
            headers: {"Content-Type": "application/json"}
        })
        window.location.assign('/profile/' + this.id_user);
    };


    editeProfileSenha(){
        fetch('/profile/' + this.state.id_user, {
            method: 'POST',
            body: JSON.stringify({
                "senha": this.state.senha,               
            }),
            headers: {"Content-Type": "application/json"}
        })
        window.location.assign('/profile/' + this.id_user);
    };


    
    editeProfileCurso(){
        fetch('/profile/' + this.state.id_user, {
            method: 'POST',
            body: JSON.stringify({
                "curso": this.state.curso,
            }),
            headers: {"Content-Type": "application/json"}
        })
        window.location.assign('/profile/' + this.id_user);
    };

    
    editeProfileSemestre(){
        fetch('/profile/' + this.state.id_user, {
            method: 'POST',
            body: JSON.stringify({
                "semestre": this.state.semestre
            }),
            headers: {"Content-Type": "application/json"}
        })
        window.location.assign('/profile/' + this.id_user);  
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
                            <Button onClick = {this.editeProfileNome}>Save</Button>
                            
                            <br></br>
                            <br></br>
                            
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Email</InputLabel>
                                <Input
                                    value={this.state.email}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            <Button onClick = {this.editeProfileEmail}>Save</Button>

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Senha</InputLabel>
                                <Input
                                    type = 'password'
                                    value={this.state.senha}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            <Button onClick = {this.editeProfileSenha}>Save</Button>

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Curso</InputLabel>
                                <Input
                                    value={this.state.curso}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            <Button onClick = {this.editeCurso}>Save</Button>

                            <br></br>
                            <br></br>
                      
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Semestre</InputLabel>
                                <Input
                                    value={this.state.semestre}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            <Button onClick = {this.editeProfileSemestre}>Save</Button>
                        
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
} 
