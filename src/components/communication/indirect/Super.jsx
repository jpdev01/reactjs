import React from 'react'
import Sub from './Sub'


export default props => {

    function onClickBtn(value) {
        console.log('Ação de clique! Valor recebido: ' + value);
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClickBtnEvent={onClickBtn}></Sub>
        </div>
    )
}
