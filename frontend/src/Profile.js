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
            id_user:1,
            email:'11',
            nome:'',
            senha:'1111111',
            curso:'',
            semestre:'',
            reputacao:'',
        }
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
        console.log(this.state.email)
    
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
                            <br></br>
                            <br></br>
                            
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Email</InputLabel>
                                <Input
                                    value={this.state.email}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>

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

                            <br></br>
                            <br></br>
                            
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Curso</InputLabel>
                                <Input
                                    value={this.state.curso}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                />
                            </FormControl>
                            
                            <br></br>
                            <br></br>
                      
                            <FormControl>
                                <InputLabel htmlFor="name-simple">Semestre</InputLabel>
                                <Input
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
