import React from 'react'
import "./Labels.css"
function Label({heading, dataArray }) {
    return (
        <div>
            <header className="Label__header">
                <h4>{heading}</h4>
                <button className="Leader__header__button">See All</button>
            </header>
            <div className="Labels">
                {dataArray.map(label => <button key={label} className="Label">{label}</button>)}
            </div>
        </div>
    )
}

export default Label
