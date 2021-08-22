import React from 'react'

import ReactDOM from 'react-dom'

import FirstComponent from './components/FirstComponent'
import Parameters from './components/Parameters'
import Childrens from './components/children'
import children from './components/children'
import Card from './components/card/Card'


export default props => (
    <div>

        {/* <FirstComponent></FirstComponent>
        <Parameters titulo="Hello"
        subtitulo="world"></Parameters> */}

        {/* <children>
            <ul>
                <li>Banana</li>
                <li>Maça</li>
                <li>Laranja</li>
                <li>Teste</li>
            </ul>
        </children> */}

        <Card titulo="Exercício 01">
            <FirstComponent></FirstComponent>
        </Card>
        <Card titulo="Exercício 02">
            Conteudo
        </Card>

    </div>

)