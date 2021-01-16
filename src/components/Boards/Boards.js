import React, { useEffect, useState } from 'react'
import Board from './Board/Board'
import "./Boards.css"
import axios from "../../axios-photos"
import { useHistory } from 'react-router-dom'
import Spinner from '../UI/Spinner/Spinner'
function Boards({ heading, sub_heading }) {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        axios.get("/collections?page=4")
            .then(res => {
                setLoading(false)
                setCollections(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleClick = (id, title) => {
        console.log(id)
        history.push({
            pathname: `/workspace-boards/${id}`,
            search: `?title=${title}`
        })
    }

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
