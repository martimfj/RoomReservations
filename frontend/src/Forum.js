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
import TextField from '@material-ui/core/TextField';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            notif:[],
            checkedA:true,
            checkedB:true,
            id_reclamacao: 0,
            listEstado: ["Ativo", "Inativo"],
            estado: 0,
            stateButton: true,
            sala: ''
        }
        this.clickState    =  this.clickState.bind(this);
   
    }


    getNotif = async() => {
        let res = await fetch('/reclamacoes', {
            method: 'GET'
        })
        res = await res.json()
        
        var l = []
        var v = []
    

        for(var i = 0; i < res.length; i++){
            if(this.state.sala === res[i].nome_sala){
                l.push(res[i])
            }
            else if(this.state.sala === ""){
                l.push(res[i])
            }
        }
        
        for(var i = 0; i < l.length; i++){
            if(this.state.checkedA && !l[i].estado){
                v.push(l[i])
             }

            if(this.state.checkedB && l[i].estado){
                v.push(l[i])
            }
        }

        this.setState({notif: v})
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
        this.setState({id_reclamacao: id_rec,
                        estado:estado,
                        stateButton: false})    
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        this.getNotif()
      };

    handleSalaChange = name => event => {
        this.setState({ [name]: event.target.value });
        this.getNotif()
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
                     <MenuAppBar/>
                </Grid>

                <Grid item xs={2}></Grid>        
                <Grid item xs={4}>   
                       <TextField  label="Sala:" onChange={this.handleSalaChange("sala")} />
                </Grid>

                <Grid item xs={2}></Grid>
                
                <Grid item xs={4}>
                    <FormGroup row >
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
                    </FormGroup>
                </Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>      
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
                                    <TableCell >{this.state.listEstado[line.estado]}</TableCell>
                                    <TableCell >{line.horario.slice(0,10)}</TableCell>
                                </TableRow>            
                                )
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={1}></Grid>


                        <Button variant="outlined" disabled = {this.state.stateButton} onClick = {this.clickState}>Mudar Estado</Button>
                
            </Grid>
        );
    }
} 
