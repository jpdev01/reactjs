import React, { useState } from 'react'
import Sub from './Sub'


export default props => {

    // criando duas variaveis: a e b.
    const [a, b] = [1, 2];

    // num = parametro numerico
    // segundo param = funcao que é responsavel por alterar esse valor.
    // useState = inicia num como zero
    const [num, setNum] = useState(0);

    function onClickBtn(value) {
        setNum(value); // seta valor da variavel num
        console.log('Ação de clique! Valor recebido: ' + value);
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub onClickBtnEvent={onClickBtn}></Sub>
        </div>
    )
}
