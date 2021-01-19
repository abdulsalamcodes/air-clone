import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from "../../axios-photos"
import Assets from '../../components/Assets/Assets';
import Boards from '../../components/Boards/Boards';
// import Spinner from '../../components/UI/Spinner/Spinner';

function Workspace() {
    let { collection } = useParams();
    const [loading, setLoading] = useState(true);
    const [collectionAssets, setCollectionAssets] = useState([]);
    let location = useLocation();
    let search = new URLSearchParams(location.search);
    let title = null;
    for (let param of search.entries()) {
        title = param[1]
        console.log(param)
    }

    useEffect(() => {
        console.log(collection)
        axios.get(`collections/${collection}/photos`)
            .then(res => {
                console.log(res.data)
                setLoading(false)
                setCollectionAssets(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [collection])

    let content = <Boards heading="Your Boards" />;
    return (
        <div>
            <h1>{title}</h1>
            {loading ? content : <Assets assets={collectionAssets} />}
        </div>
    )
}


export default Workspace
