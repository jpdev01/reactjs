import React from 'react';

import Iteration from './simple/Iteration'
import Conditional from './simple/Conditional'
import Dad from './communication/direct/Dad'

import Super from './communication/indirect/Super'
import SubState from './state/SubState'
import SuperState from './state/SuperState'

import Input from './form/Input'
import Counter from './counter/Counter'
import Mega from './mega/Mega'
import BootstrapBtn from './bootstrapComponents/BootstrapBtn'
import ReactDOM from 'react-dom'

import FirstComponent from './simple/FirstComponent'
import Parameters from './simple/Parameters'
import Childrens from './simple/Children'
import Card from './card/Card'

export default () => {
    return (
        <div>
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

                <Card title="Integração bootstrap">
                    <BootstrapBtn></BootstrapBtn>
                </Card>
            </div>
        </div>
    );
};