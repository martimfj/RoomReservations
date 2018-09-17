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

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            nome:'',
            senha:'',
            curso:'',
            semestre:'',
            reputacao:'',
        }
    }
    
    getProfile(){

        fetch('/profile', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            this.setState({
                email:      result.email,
                nome:       result.nome,
                senha:      result.senha,
                curso:      result.curso,
                semestre:   result.semestre,
                reputacao:  result.reputacao,
            
              });
        })
    }

    editeProfile(){
        fetch('/profile', {
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
    };

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
                                    id="name-simple"
                                    value={this.state.nome}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            <br></br>
                            <br></br>
                            
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Email</InputLabel>
                                <Input
                                    id="name-simple"
                                    value={this.state.email}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Senha</InputLabel>
                                <Input
                                    id="name-simple"
                                    value={this.state.senha}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Curso</InputLabel>
                                <Input
                                    id="name-simple"
                                    value={this.state.curso}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            
                            <br></br>
                            <br></br>
                      
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Semestre</InputLabel>
                                <Input
                                    id="name-simple"
                                    value={this.state.semestre}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>

                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
} 
