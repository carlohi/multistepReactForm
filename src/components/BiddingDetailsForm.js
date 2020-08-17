import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class BiddingDetailsForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Datos de publicaci&oacute;n"></AppBar>
                    <TextField hintText="Ingresa el titulo" floatingLabelText="Titulo" onChange={handleChange('title')} defaultValue={values.title }></TextField>
                    <br/>
                    <TextField hintText="Ingresa la categoria" floatingLabelText="Categoria" onChange={handleChange('category')} defaultValue={values.category }></TextField>
                    <br/>
                    <br/>
                    <TextField hintText="Ingresa la descripcion" multiLine={true} onChange={handleChange('description')} defaultValue={values.description }></TextField>
                    <br/>
                    <TextField label="Fecha de inicio" type="date" onChange={handleChange('since')} defaultValue={values.since } ></TextField>
                    <br/>
                    <TextField hintText="Fecha de termino" floatingLabelText="Fecha de termino" onChange={handleChange('until')} defaultValue={values.until }></TextField>
                    <br/>
                    <TextField hintText="Ingresa la cantidad" floatingLabelText="Cantidad" onChange={handleChange('quantity')} defaultValue={values.quantity }></TextField>
                    <br/>
                    <RaisedButton label="Continuar" primary={true} style={styles.button} onClick={this.continue}></RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default BiddingDetailsForm
