import React from 'react'

function FirstComponent(){
    return  (
    <div>
        <h1>First</h1>
        <h2>Component</h2>
    </div>)
}

// quando se usa dois elementos adjacentes, é necessáiro estarem dentro de alguma tag.
function ExampleComponent(){
    return (
        <>
        <h1>Exemplo com tag vazia</h1>
        </>
    )
}

//tambem pode-se usar React.fragment
function Example2Component(){
    return (
        <React.Fragment>
        <h1>Exemplo com tag vazia</h1>
        </React.Fragment>
    )
}

export default FirstComponent