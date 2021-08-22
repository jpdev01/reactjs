import React from 'react'

export default (props) => {

    function onAction(){
        props.onClickBtnEvent(Math.random());
    }

    return (
        <div>
            <button onClick={
                () => 
                {props.onClickBtnEvent(Math.random())}
                }>
                    Alterar uma informação do Pai</button>
                    
            <button onClick={onAction}>Alterar uma informação do Pai</button>
        </div>
    );
};