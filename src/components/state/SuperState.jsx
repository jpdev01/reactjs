import React, { useState } from 'react'
import SubState from './SubState'


export default props => {

    // criando duas variaveis: a e b.
    const [a, b] = [1, 2];

    // num = parametro numerico
    // segundo param = funcao que é responsavel por alterar esse valor.
    // useState = inicia num como zero
    const [num, setNum] = useState(0);

    const[text, setText] = useState('Valor');

    function onClickBtn(value, text) {
        setNum(value); // seta valor da variavel num
        setText(text);
        console.log('Ação de clique! Valor recebido: ' + value);
    }

    return (
        <div>
            <h4>{text}: {num}</h4>
            <SubState onClickBtnEvent={onClickBtn}></SubState>
        </div>
    )
}
