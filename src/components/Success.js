import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Esta lista tu publicaci&oacute;n!"></AppBar>
                    <h1>Ir a la pagina de la publicaci&oacute;n</h1>
                    <p>Recibiras un mail de confirmaci&oacute;n</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
