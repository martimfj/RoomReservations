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


const styles = {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  };
  
export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            salas         : [],
            reservas      : [],
            idSala        : 0
        }
        this.getSalas    =  this.getSalas.bind(this);
        this.getReservas =  this.getReservas.bind(this);
        this.getReservasId =  this.getReservasId.bind(this);
    
    }

    getReservas = async() => {      
        let res = await fetch('/reservas', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({reservas: res})
    }

    getSalas = async() => {      
        let res = await fetch('/salas', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({salas: res})
    }
    
    getReservasId(id_sala){
        window.location.assign('/main/' + id_sala);  
        this.getReservas()
    }

    componentDidMount(){
        this.getSalas()
        this.getReservas()
    }

    render(){
  
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <MenuAppBar/>
                </Grid>

                <Grid item xs={3}>
                    
                    {this.state.salas.map((card, index) => {
                        return (
                            <Card style = {{maxWidth: 345, margin:10}}  onClick={() => this.getReservasId(card.id_sala)}>
                                <CardMedia/>
                                <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Sala: {card.nome_sala}
                                </Typography>
                                <Typography component="p">
                                    Capacidade: {card.lugares} Pessoas
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
                        
                            <TableRow>
                                <TableCell >{line.nome_sala}</TableCell>
                                <TableCell >{line.nome}</TableCell>
                                <TableCell numeric>{line.entrada}</TableCell>
                                <TableCell numeric>{line.saida}</TableCell>
                            </TableRow>            
                            )
                            })}
                        </TableBody>
                    </Table>
                </Paper>


                </Grid>
            </Grid>
        );
    }
} 
