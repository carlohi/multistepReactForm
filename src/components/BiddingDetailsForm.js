import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
                    <FormLabel component="category">Categoria</FormLabel>
                    <br/>
                    <FormControl component="fieldset">
      <RadioGroup row aria-label="category" name="category" value={values.category} onChange={handleChange('category')}>
        <FormControlLabel value="Producto" control={<Radio />} label="Producto" labelPlacement="top" />
        <FormControlLabel value="Servicio" control={<Radio />} label="Servicio" labelPlacement="top" />
      </RadioGroup>
    </FormControl>
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
