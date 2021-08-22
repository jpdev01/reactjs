import React from 'react'
import './Card.css'

export default props =>
    <div className="Card">
        <div className="Content" style={{ borderColor: props.color || '#000' }}>
            {props.children}
        </div>
        <div className="Footer" style={{ backgroundColor: props.color || '#000' }}>
            {props.title}
        </div>
    </div>


//className é a mesma coisa que o class do html

