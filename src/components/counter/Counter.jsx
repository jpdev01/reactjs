import React, { Component } from 'react'

export default class Counter extends Component {

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <h4>Display</h4>

                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        )
    }
}