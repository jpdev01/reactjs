import React from 'react'

export default (props) =>
    //props é somente leitura. Isso gerara erro.
    //props.title = "Alterando o valor do title"
    <>
        <h3>Título: {props.title}</h3>
        <h4>Subtítulo: {props.subtitle}</h4>
        <p>{Array(10).fill(0)}</p>
    </>

    // e possivel usar codigo javascript dentro da tag 