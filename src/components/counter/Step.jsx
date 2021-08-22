import React from 'react'

export default props => {

    function setStepValue(event) {
        props.setStepValue(event);
    }

    return (
        <div>
            <p>Step: {props.actualValue}</p>
                <input type="number" value={props.actualValue} style={{width: '60px'}}
                onChange={setStepValue}></input> 
        </div>
    );
};