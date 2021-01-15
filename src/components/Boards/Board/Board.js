import React from 'react';
import "./Board.css";
import { FiMoreVertical } from 'react-icons/fi';

function Board({cover_photo, title, handleClick}) {
    return (
        <div onClick={handleClick} className="Board">
            <div className="">
                <img src={cover_photo} alt="" className="Board__image" />
            </div>

            <div className="Board__footer">
                <div>
                    <h5>{title}</h5>
                    <small>In the Demo</small>
                </div>
                <div><FiMoreVertical /></div>
            </div>
        </div>
    )
}

export default Board
