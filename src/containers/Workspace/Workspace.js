import React from 'react'
import { useParams } from 'react-router-dom'
import Boards from '../../components/Boards/Boards'

function Workspace(props) {
    let {collection} = useParams();

    return (
        <div>
            <h1>{collection}</h1>
            
            <Boards heading="Boards" />
        </div>
    )
}

export default Workspace
