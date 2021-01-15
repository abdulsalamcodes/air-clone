import React, { useState } from 'react'
import "./ToolTip.css";

function ToolTip(props) {
    const [active, setActive] = useState(false);
    let timeout;

    const showTooltip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, 200);
    }

    const hideTooltip = () => {
        clearInterval(timeout);
        setActive(false);
    }

    const ToolTipContent = () => {
        return <span className="Tooltip__content" > {props.content}</span>
    }

    return (
        <div className="ToolTip" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {props.children}
            {active && <ToolTipContent />}
        </div>
    )
}

export default ToolTip
