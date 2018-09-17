import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Grid from '@material-ui/core/Grid';
import Table from './components/Table';



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
            salas:[],
            idSala: 0
        }
    }

    
    getSalas(){      
        fetch('/salas', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            let perguntas = []
            for(var i = 0; i < result.length; i++){
                
                perguntas.push( 
                    <Card style = {{maxWidth: 345, margin:10}}  onClick= {this.getIdSala}>
                            <CardMedia 
                            />
                            <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Sala: {result[i].nome}
                            </Typography>
                            <Typography component="p">
                                Lugares: {result[i].lugares}
                            </Typography>
                            </CardContent>
                    </Card>
                    )
            }
            this.setState({salas: perguntas})
            })   
    }


    
    componentWillMount(){
        this.getSalas()
     }


    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <MenuAppBar/>
                </Grid>

                <Grid item xs={3}>
                    {this.state.salas.slice(0,this.state.salas.length/2)}
                </Grid>

                
                <Grid item xs={3}>
                    {this.state.salas.slice(this.state.salas.length/2, this.state.salas.length)}
                </Grid>

                <Grid item xs={6}>
                    <Table/>
                </Grid>
            </Grid>
        );
    }
} 
