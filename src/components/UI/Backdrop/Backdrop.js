import React from 'react'
import "./Backdrop.css"
function Backdrop(props) {
    return (
        <div onClick={props.clicked} className="Backdrop">{props.children}</div>
    )
}

export default Backdrop
