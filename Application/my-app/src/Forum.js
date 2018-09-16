import ReactDom from 'react-dom';
import React from  'react';
import MenuAppBar from './components/MenuAppBar'
import Table from './components/Table';
import Select from './components/Select'


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    
    render(){
        return(
            <Grid container spacing={16}>
                <Grid item xs={12}>
                   <div>
                       <MenuAppBar/>
                       <Select/>
                       <Table/>
                    </div>
                </Grid>
            </Grid>
        );
    }
} 
