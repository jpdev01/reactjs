import React from 'react'

export default (props) => {

    function onAction(){
        props.onClickBtnEvent(Math.random(), "Novo valor");
    }

    return (
        <div>
            <button onClick={
                () => 
                {props.onClickBtnEvent(Math.random(), "Novo valor")}
                }>
                    Alterar uma informação do Pai</button>
                    
            <button onClick={onAction}>Alterar uma informação do Pai</button>
        </div>
    );
};