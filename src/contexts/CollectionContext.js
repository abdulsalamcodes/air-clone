import React, { useState, useEffect, createContext } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "../axios-photos";

export const CollectionContext = createContext();

function CollectionContextProvider(props) {
    const [collections, setCollections] = useState([]);
    const [loadingA, setLoadingA] = useState(true);
    const [loading, setLoading] = useState(true)
    const [assets, setAssets] = useState([]);

    let history = useHistory();

    // Fetch List of Collections from unsplash API
    useEffect(() => {
        axios.get("/collections")
            .then(res => {
                setCollections(res.data);
                setLoadingA(false);
                let arrayOfAssets = [];
                res.data.map(collection => {
                    axios.get(`collections/${collection.id}/photos`)
                        .then(res => {
                            arrayOfAssets.push(...res.data)
                            let newAssets = [...arrayOfAssets]
                            setAssets(newAssets);
                            setLoading(false)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    return arrayOfAssets;
                })
            })
            .catch(error => {
                console.log(error)
            })

        setLoading(false)
    }, [])


    // Clicking on a collection to redirect to single Collection Page
    const handleClick = (id, title) => {
        console.log(id)
        history.push({
            pathname: `/workspace-boards/${id}`,
            search: `?title=${title}`
        })
    }
    // getAllLabels
    return (
        <CollectionContext.Provider value={{ assets, loading, handleClick, collections, loadingA }}>
            {props.children}
        </CollectionContext.Provider>
    )

}

export default CollectionContextProvider
