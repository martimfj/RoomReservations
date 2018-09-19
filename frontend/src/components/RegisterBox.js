import React from 'react';
import Button from '@material-ui/core/Button';

const styleBut = {
    width: 350/2,
  };

class RegisterBox extends React.Component{
    

    cancelClick = (value) => {
        window.location.assign('/login');  
    };

    confirmClick = (value) => {
        window.location.assign('/main');  
    };

    render(){  
        return(
            <div className = "Rbigbox">
	                <input type="text" placeholder="Nome" name="user" ></input><br/>
				    <input type="text" placeholder="Senha" name="password"></input><br/>
				    <input type="text" placeholder="Email" name="password"></input><br/>
				    <input type="text" placeholder="Curso" name="password"></input><br/>
				    <input type="text" placeholder="Semestre" name="password"></input><br/>
				    
    			    <Button variant="outlined" style={styleBut} onClick = {this.confirmClick} >Conirmar </Button>
                    <Button variant="outlined" style={styleBut} onClick = {this.cancelClick}>Cancelar</Button>
                    
			</div>        
        );
    }  
}

export default RegisterBox;
