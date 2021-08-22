import React from 'react'

export default (props) =>
    <>
        <h3>Título: {props.titulo}</h3>
        <h4>Subtítulo: {props.subtitulo}</h4>
        <p>{Array(10).fill(0)}</p>
    </>

    // e possivel usar codigo javascript dentro da tag 