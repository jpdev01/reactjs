import React, { useState } from 'react'

export default props => {

    function changeEvent(event){
        setName(event.target.value);
    }
    //controlledComponents -> estado muda a aplicacao grafica.
    //let name = "Pedro";
    // para resolver, usar onChange
    // ou coloque como readOnly
    const [name, setName] = useState('Pedro');
    return (
        <div>
            {/* <input type="text" value={name} readOnly></input> */}
            <input type="text" value={name} onChange={changeEvent}></input>
        </div>
    );
};