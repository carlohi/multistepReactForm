import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem} from 'material-ui/List';
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form, here i can call my api to save the data 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values:{title, category, description, since, until, quantity, images}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmar publicaci&oacute;n "></AppBar>
                    <List>
                        <ListItem primaryText="Titulo" secondaryText={title}></ListItem>
                        <ListItem primaryText="Categoria" secondaryText={category}></ListItem>
                        <ListItem primaryText="Descripcion" secondaryText={description}></ListItem>
                        <ListItem primaryText="Fecha de inicio" secondaryText={since}></ListItem>
                        <ListItem primaryText="Fecha de termino" secondaryText={until}></ListItem>
                        <ListItem primaryText="cantidad" secondaryText={quantity}></ListItem>
                        <ListItem primaryText="imagenes" secondaryText={images}></ListItem>

                    </List>
                    <br/>
                    <RaisedButton label="Confirmar" primary={true} style={styles.button} onClick={this.continue}></RaisedButton>
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

export default Confirm
