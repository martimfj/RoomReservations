import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Grid from '@material-ui/core/Grid';


import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
},
});

export default class Notify extends React.Component{
    constructor(){
        super();
        this.state={
            salas         : [],
            idSala        : 0,
            idUsuario     : 1,
            tipo        : 0,
            data          : new Date(),
            nomeSala      : "Selecione a Sala",
            descricao     : "", 
            stateButton   : true,
            tipoView      : ["Quebra", "Geral", "Limpeza"]
        }
        this.getSalas    =  this.getSalas.bind(this);    
    }

    getSalas = async() => {      
        let res = await fetch('/salas', {
            method: 'GET'
        })
        res = await res.json()
        this.setState({salas: res})
        console.log(res)
    }


    postNotfy = async() => {      
        let res = await fetch('/reclamacao', {
            method: 'POST',
            body: JSON.stringify({
                "id_usuario": this.state.idUsuario,
                "id_sala"   : this.state.idSala,
                "tipo_r"    : this.state.tipo,
                "descricao" : this.state.descricao,
                "horario"   :  "2018-05-05,",        
                "estado"    : 1,
            }),
            headers: {"Content-Type": "application/json"}
        })
        res = await res.json()
        console.log(res)
        alert(res.message)
        window.location.assign('/notify'); 
    }


    setVarNameID(id_sala, name){
        this.setState({idSala: id_sala,
                        nomeSala: "Sala: " + name,
                        stateButton : false })
    }

    componentDidMount(){
        this.getSalas()
     }


    render(){
        const { classes } = this.props;
  
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <MenuAppBar/>
                </Grid>

                <Grid item xs={3}>
                    
                    {this.state.salas.map((card, index) => {
                        return (
                            <Card style = {{maxWidth: 345, margin:10}}  onClick={() => this.setVarNameID(card.id_sala, card.nome_sala)}>
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
                

                <form  noValidate autoComplete="off">
                    <h1>{this.state.nomeSala}</h1>

                    
                        <FormControl style = {{minWidth: 200}} >
                            <InputLabel  htmlFor="age-simple">Curso</InputLabel>
                            <Select 
                                value={this.state.tipo}
                                onChange={e => this.setState({ tipo: e.target.value })}
                            >
                            {this.state.tipoView.map((line, index) => {
                                    return (
                                        
                                <MenuItem value={index}>{line}</MenuItem>
                                    )
                            })}
                            </Select>
                            
                        </FormControl>                        
                    
                    <br></br>
                    
                    <TextField style = {{minWidth: 200}}
                    label="Descrição"
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    onChange={e => this.setState({ descricao: e.target.value })}
                    />

                    <br></br>
                
                    <Button variant="outlined" disabled= {this.state.stateButton} onClick = {this.postNotfy}>Enviar</Button>
                </form>
                
                
                </Grid>
            </Grid>
        );
    }
} 
