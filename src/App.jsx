import React from 'react'

import ReactDOM from 'react-dom'

import FirstComponent from './components/FirstComponent'
import Parameters from './components/Parameters'
import Childrens from './components/children'
import children from './components/children'
import Card from './components/card/Card'
import Interation from './components/Iteration'

import './App.css'
import Iteration from './components/Iteration'
import Conditional from './components/Conditional'


export default props => (
    <div className="App">
        <Card title="Hello World">
            <FirstComponent></FirstComponent>
        </Card>
        <Card title="Com Parametros">
            <Parameters title="Hello"
                subtitle="world"></Parameters>
        </Card>


        <Card title="Com filhos">
            <children>
                <ul>
                    <li>Banana</li>
                    <li>Maça</li>
                    <li>Laranja</li>
                    <li>Teste</li>
                </ul>
            </children>
        </Card>


        <Card title="Exercício 01">
            <FirstComponent></FirstComponent>
        </Card>
        <Card title="Exercício 02">
            Conteudo
        </Card>

        <Card title="Repetição">
            <Iteration></Iteration>
        </Card>

        <Card title="Condicional">
            <Conditional number={10}></Conditional>
        </Card>

    </div>

)