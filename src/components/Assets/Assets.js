import React, { useEffect, useState } from 'react'
import axios from "../../axios-photos"
import "./Assets.css"
import Spinner from '../UI/Spinner/Spinner';

function Assets({assets}) {
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get("/photos")
            .then(res => {
                setImages(res.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

     const limitText = (text) => {
         if (!text) return null;
        return text.slice(0, 25) + "..."
     }

    let AssetToDisplay = assets?.length > 0 ? assets : images


    let content = loading ? <Spinner /> : <div className="Asset__Wrapper">
        <header>Assets ({images.length})</header>
        <div className="Asset__grid">

            {AssetToDisplay.map(image => {
                return <div className="Asset" key={image.id}>
                    <img src={image.urls.small} className="Asset__Image" alt={image.alt_description} />
                    <p className="Asset__Name">{ limitText(image.description) || limitText(image.alt_description)}</p>
                </div>
            })}
        </div>
    </div>

    return (
        content
    )
}

export default Assets
