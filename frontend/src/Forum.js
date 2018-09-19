import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Select from './components/Select'

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            notif:[],
            checkedA:false,
            checkedB:false,
            checkedC:false,
            checkedD:false,
            id_reclamacao: 0,
            tipo_r: 0,
            estado: ["Ativo", "Inativo"]
        }
        this.clickState    =  this.clickState.bind(this);
   
    }


    getNotif = async() => {
        let res = await fetch('/reclamacoes', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({notif: res})
    }
    
    putState = async() => {
        let res = await fetch('/reclamacao' ,{
            method: 'PUT',
            body: JSON.stringify({
                "id_reclamacao": this.state.id_reclamacao,
                "estado":  !(this.state.estado)
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        console.log(res)
    }


    handleClick(ev){
        console.log(this.state.email)
        fetch('/auth', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "senha": this.state.senha
            }),
            headers: {"Content-Type": "application/json"}
        })
    }


    getIdRow(id_rec, estado){
        this.setState({id_reclamacao: id_rec})
        this.setState({estado: estado})
        console.log(id_rec)    
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    clickState(){
        if(this.state.id_reclamacao > 0){
            this.putState()
            this.getNotif()
        }
    }

    componentWillMount(){
        this.getNotif()
    }

    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                   <div>
                       <MenuAppBar/>
                        
                        <FormGroup row style = {{marginLeft: '70%'}}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange("checkedA")}
                                    value="checkedA"
                                    color="primary"
                                />
                                }
                                label="Ativo"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedB}
                                    onChange={this.handleChange("checkedB")}
                                    value="checkedB"
                                    color="primary"
                                />
                                }
                                label="Inativo"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedC}
                                    onChange={this.handleChange("checkedC")}
                                    value="checkedC"
                                    color="primary"
                                />
                                }
                                label="1"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={this.state.checkedD}
                                    onChange={this.handleChange("checkedD")}
                                    value="checkedD"
                                    color="primary"
                                />
                                }
                                label="2"
                            />
                        </FormGroup>


                        <Paper>
                            <Table >
                                <TableHead style = {{backgroundColor: "Gray"}}>
                                <TableRow>
                                    <TableCell >Nome Sala</TableCell>
                                    <TableCell >Nome Usuario</TableCell>
                                    <TableCell numeric>Tipo</TableCell>
                                    <TableCell >Descricao</TableCell>
                                    <TableCell >Estado</TableCell>
                                    <TableCell >Horario</TableCell>
                                </TableRow>
                                </TableHead>                            
                                <TableBody>            
                                    {this.state.notif.map((line, index) => {
                                    return (
                                
                                    <TableRow onClick={() => this.getIdRow(line.id_reclamacao, line.estado)}>
                                        <TableCell >{line.nome_sala}</TableCell>
                                        <TableCell >{line.nome}</TableCell>
                                        <TableCell numeric>{line.tipo_r}</TableCell>
                                        <TableCell >{line.descricao}</TableCell>
                                        <TableCell >{this.state.estado[line.estado]}</TableCell>
                                        <TableCell >{line.horario}</TableCell>
                                    </TableRow>            
                                    )
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>

                        <Button variant="outlined" onClick = {this.clickState}>Mudar Estado</Button>
                    </div>
                </Grid>
            </Grid>
        );
    }
} 
