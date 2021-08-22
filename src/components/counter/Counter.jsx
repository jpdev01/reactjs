import React, { Component } from 'react'

import Display from './Display';
import Step from './Step';

export default class Counter extends Component {

    //recebe as props nas classes.
    constructor(props) {
        super(props);
        this.state = {
            step: props.step ? props.step : 0,
            value: props.value || 0
        }
    }

    setStepValue = (event) => {
        this.setState({
            step: +event.target.value
        });
    }

    increment = () => {
        this.setState({
            value: this.state.value + this.state.step
        });
    }

    decrement = () => {
        this.setState({
            value: this.state.value + this.state.step
        });
    }

    // nao é obrigatorio usar o constructor, isso porque props esta disponivel em escopo global.
    // this.state = {
    //     step: props.step ? props.step : 0,
    //     value: 0
    // }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Step actualValue={this.state.step} setStepValue={this.setStepValue}></Step>

                <Display value={this.state.value}></Display>

                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}