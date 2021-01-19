import React, { useContext } from 'react'
import Board from './Board/Board'
import "./Boards.css"
import Spinner from '../UI/Spinner/Spinner'
import { CollectionContext } from '../../contexts/CollectionContext'
function Boards({ heading, sub_heading, loading }) {
    const { collections, handleClick } = useContext(CollectionContext);
    // Adding a spinner before data is fetched
    let content = loading ? <Spinner /> : <div className="Boards">
        {collections.map(collection => {
            return <Board key={collection.id} handleClick={() => handleClick(collection.id, collection.title)} cover_photo={collection.cover_photo.urls.small} title={collection.title} />
        })}
    </div>
    return (
        <div>
            <header>
                <h4 className="Boards__heading">{heading}</h4>
                <p className="Boards__sub-heading">{sub_heading}</p>
            </header>
            {content}
        </div>
    )
}

export default Boards
