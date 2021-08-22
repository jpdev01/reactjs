import ReactDOM from 'react-dom'

import './index.css'
import FirstComponent from './components/FirstComponent'
import Parameters from './components/Parameters'

ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
        <Parameters titulo="Hello"
        subtitulo="world"></Parameters>
    </div>,
    document.getElementById("root")
)