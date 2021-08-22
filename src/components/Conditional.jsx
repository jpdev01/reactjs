import React from 'react'

export default props => {

    return (
        <div>
            <h2>O número {props.number} é </h2>
            {
                props % 2 == 0 ?
                    <span>Par</span>
                    :
                    <span>Ímpar</span>
            }
        </div>
    )
}