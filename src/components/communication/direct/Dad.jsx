import React from 'react'
import Son from './Son'

export default props =>
    <div>
        <Son {...props}>Passando param para o filho</Son>
        <Son lastName={props.lastName}>Passando param para o filho</Son>
        <Son lastName="Borba">Pedro</Son>
        <Son lastName="Silva">Lucas</Son>
    </div>

    //João esta enviando o sobrenome para o componente filho atraves do ...props