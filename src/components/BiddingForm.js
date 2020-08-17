import React, { Component } from 'react'
import BiddingDetailsForm from './BiddingDetailsForm';
import ArticleForm from './ArticleForm';
import Confirm from './Confirm';
import Success from './Success';

export class BiddingForm extends Component {

    state = {
        step: 1,
        title: '',
        category: '',
        description: '',
        since: new Date(),
        until: '',
        quantity: '',
        images: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value}); 
    }

    render() {
        const {step} = this.state;
        const {title, category, description, since, until, quantity, images} = this.state;
        const values = {title, category, description, since, until, quantity, images}
        
        switch(step){
            case 1:
                return(
                    <BiddingDetailsForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 2:
                return (<ArticleForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                );
            case 3:
                return (<Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
                    );
            case 4:
                return <Success></Success>;
            default:
                return(
                    <BiddingDetailsForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    )
        }
    }
}

export default BiddingForm
