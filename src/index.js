import ReactDOM from 'react-dom'

import './index.css'
import FirstComponent from './components/FirstComponent'
import Parameters from './components/Parameters'
import Childrens from './components/children'
import children from './components/children'

ReactDOM.render(
    <div>
        {/* <FirstComponent></FirstComponent>
        <Parameters titulo="Hello"
        subtitulo="world"></Parameters> */}
        <children>
            <ul>
                <li>Banana</li>
                <li>Maça</li>
                <li>Laranja</li>
                <li>Teste</li>
            </ul>
        </children>

    </div>,
    document.getElementById("root")
)