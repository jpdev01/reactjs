import React, { Component } from 'react'

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
                <p>Step: {this.state.step}</p>
                <input type="number" value={this.state.step}
                onChange={this.setStepValue}></input> 

                <p>Valor: {this.state.value}</p>

                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}