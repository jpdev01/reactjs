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
            <p>Nome: {name}</p>
            <input type="text" value={name} onChange={changeEvent}></input>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        </div>
    );
};