import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";


const styles = {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  };


  
const names = [
    "7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00",
    "16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
        

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            idUser        : 1,
            salas         : [],
            reservas      : [],
            idSala        : 0,
            horaEnt       : "",
            horarios      :[],
            horariosRes   :[],
            index         : '',
        }
        this.getSalas    =  this.getSalas.bind(this);
        this.getReservas =  this.getReservas.bind(this);
        this.getReservasId =  this.getReservasId.bind(this);
    
    }

    // getHorarios(){
    //     for (var i = 0; i<names.length; i++){
    //         for (var j = 0; i<names.length; i++){
    //         if(this.state.horarios[i] === horariosRes[i]:)
    //     }
    // }

    getReservas = async() => {      
        let res = await fetch('/reservas', {
            method: 'GET'
        })
        res = await res.json()

        let v      = []
        let r      = []
        for (var i = 0; i < res.length; i ++){
            if(res[i].id_sala === this.state.idSala){
                v.push(res[i])
                r.push(res[i].entrada)
            }
        }
        this.setState({reservas: v,
                        horariosRes:r})
        console.log(res)
    }

    getSalas = async() => {      
        let res = await fetch('/salas', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({salas: res})
    }

    getReservasId(id_sala){
        this.setState({idSala: id_sala})
        this.getReservas()
    }

    handleChange = event => {
        this.setState({ horaEnt: event.target.value });
        
      };


    postReserva = async() => {      
        let res = await fetch('/reserva', {
            method: 'Post',
            body: JSON.stringify({
                "id_usuario":this.state.idUser,
                "id_sala": this.state.idSala,
                "entrada": names[this.state.horaEnt] + ":00",
                "saida":   names[ this.state.horaEnt + 1] + ":00"            
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        console.log(res)
        alert(res.message)
        this.getReservas()
    
    }

    componentDidMount(){
        this.getSalas()
    }


    render(){
  
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <MenuAppBar/>
                </Grid>

                <Grid item xs={3}>
                    
                    {this.state.salas.map((line, index) => {
                        return (
                            <Card style = {{maxWidth: 345, margin:10}}  onClick={() => this.getReservasId(line.id_sala)}>
                                <CardMedia/>
                                <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Sala: {line.nome_sala}
                                </Typography>
                                <Typography component="p">
                                    Capacidade: {line.lugares} Pessoas
                                </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}

                </Grid>

                <Grid item xs={3}>
                </Grid> 

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
                            return (
                        
                            <TableRow >
                                <TableCell >{line.nome_sala}</TableCell>
                                <TableCell >{line.nome}</TableCell>
                                <TableCell numeric>{line.entrada.slice(0,5)}</TableCell>
                                <TableCell numeric>{line.saida.slice(0,5)}</TableCell>
                            </TableRow>            
                            )
                            })}
                        </TableBody>
                    </Table>
                </Paper>


                <br></br>
                <form autoComplete="off">
                    <FormControl style = {{minWidth: 120}} >
                    <InputLabel  htmlFor="age-simple">Entrada</InputLabel>
                    <Select 
                        value={this.state.horaEnt}
                        onChange={this.handleChange}
                    >
                    {names.map((line, index) => {
                            return (
                                
                        <MenuItem value={index}>{line}</MenuItem>
                            )
                    })}
                    </Select>
                    
                    </FormControl>    
                </form>

                <br></br>
                
                <Button variant="outlined" onClick = {this.postReserva}>Reservar</Button>
                
                </Grid>
            </Grid>
        );
    }
} 
