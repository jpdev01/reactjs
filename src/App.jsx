import React from 'react'

import ReactDOM from 'react-dom'

import FirstComponent from './components/simple/FirstComponent'
import Parameters from './components/simple/Parameters'
import Childrens from './components/simple/Children'
import Card from './components/card/Card'

import './App.css'
import Iteration from './components/simple/Iteration'
import Conditional from './components/simple/Conditional'
import Dad from './components/communication/direct/Dad'

import Super from './components/communication/indirect/Super'
import SubState from './components/state/SubState'
import SuperState from './components/state/SuperState'

import Input from './components/form/Input'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'


export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="Hello World" color="#FA6900">
                <FirstComponent></FirstComponent>
            </Card>
            <Card title="Com Parametros" color="#ff0000">
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

            <Card title="Condicional com if">
                <Conditional number={15}></Conditional>
            </Card>

            <Card title="Comunicação direta">
                <Dad lastName="Freitas"></Dad>
            </Card>

            <Card title="Comunicação indireta">
                <Super></Super>
            </Card>

            <Card title="Mudança de estado">
                <SuperState></SuperState>
            </Card>

            <Card title="Forms">
                <Input></Input>
            </Card>

            <Card title="Contador">
                <Counter step={10}></Counter>
            </Card>

            <Card title="Mega sena">
                <Mega qtdeNumbers={8}></Mega>
            </Card>
        </div>

    </div>

);