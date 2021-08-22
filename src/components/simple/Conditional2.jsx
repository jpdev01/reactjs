import React from 'react'
import If from './ConditionalWithIf'

export default props => {

    return (
        <div>
            <h2>O número {props.number} é </h2>
            <If test={props.number % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.number % 2 === 1}>
                <span>Ímpar</span>
            </If>
        </div>
    )
}