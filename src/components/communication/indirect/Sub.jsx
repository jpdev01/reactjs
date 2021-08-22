import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={
                () => 
                {props.onClickBtnEvent(Math.random())}
                }>
                    Alterar uma informação do Pai</button>
        </div>
    );
};