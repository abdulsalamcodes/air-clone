import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import "./Modal.css"
function Modal(props) {
    return (
        <Backdrop clicked={props.clicked}>
            <div className="Modal">
                {props.children}
            </div>
        </Backdrop>
    )
}

export default Modal
