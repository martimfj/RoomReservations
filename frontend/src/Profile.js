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

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            id_user: 1,
            email:'11',
            nome:'',
            senha:'1111111',
            reputacao:'',
            reservas:[],
            nome : "Bruna Kimura",
            idReserva: '0', 
        }

        this.editeProfileEmail    =  this.editeProfileEmail.bind(this);
        this.editeProfileNome     =  this.editeProfileNome.bind(this);
        this.editeProfileSenha    =  this.editeProfileSenha.bind(this);
        this.getReservas =  this.getReservas.bind(this);
        this.getReservaId =  this.getReservaId.bind(this);
   
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

    getReservas = async() => {      
        let res = await fetch('/reservas', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({reservas: res})
        console.log(res)
        for (var i = 0; i < res.length; i++){}
    }

    getReservaId(id_reserva){
        this.setState({idReserva: id_reserva})
    }

    removeReserva = async() =>{
        let res = await fetch('/reserva' , {
            method: 'DELETE',
            body: JSON.stringify({
                "id_reserva":this.state.idReserva,
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        alert(res.message)
        window.location.assign('/profile'); 
    };

    componentDidMount(){
        this.getProfile()
        this.getReservas()
        
    }

    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                 
                        <MenuAppBar/>
                </Grid>
                        <Grid item xs={3}>
                
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
                                <InputLabel htmlFor="name-simple">Reputação</InputLabel>
                                <Input 
                                    disabled = {true}
                                    value = {this.state.reputacao}
                                    />
                            </FormControl>

                        </Grid>

                        <Grid item xs={3}></Grid> 

                        <Grid item xs={6}>
                            <Paper>
                                <Table >
                                    <TableHead style = {{backgroundColor: "#3F51B5"}}>
                                    <TableRow>
                                        <TableCell >Nome Sala</TableCell>
                                        <TableCell >Nome Usuario</TableCell>
                                        <TableCell numeric>Entrada</TableCell>
                                        <TableCell numeric>Saida</TableCell>
                                    </TableRow>
                                    </TableHead>                            
                                    <TableBody>            
                                        {this.state.reservas.map((line, index) => {
                                            if(line.nome == this.state.nome ){
                                        return (
                                            
                                        <TableRow onClick={() => this.getReservaId(line.id_reserva)}>
                                            <TableCell >{line.nome_sala}</TableCell>
                                            <TableCell >{line.nome}</TableCell>
                                            <TableCell numeric>{line.entrada.slice(0,5)}</TableCell>
                                            <TableCell numeric>{line.saida.slice(0,5)}</TableCell>
                                        </TableRow>            
                                        )}
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                            
                            <Button variant="outlined" onClick = {this.removeReserva}>Remover</Button>
                        
                        </Grid>
                </Grid>
        );
    }
} 
