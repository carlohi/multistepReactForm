import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class ArticleForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Completa tu publicaci&oacute;n"></AppBar>
                    <TextField hintText="Ingresa las imagenes" floatingLabelText="Imagenes" onChange={handleChange('images')} defaultValue={values.images}></TextField>
                    <br/>
                    <RaisedButton label="Continuar" primary={true} style={styles.button} onClick={this.continue}></RaisedButton>
                    <RaisedButton label="Atr&aacute;s" primary={false} style={styles.button} onClick={this.back}></RaisedButton>

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

export default ArticleForm
