import React, { useEffect, useState } from 'react'
import axios from "../../axios-photos"
import "./Assets.css"
import Spinner from '../UI/Spinner/Spinner';

function Assets() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)
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


    let content = loading ? <Spinner /> : <div className="Asset__Wrapper">
        <header>Assets ({images.length})</header>
        <div className="Asset__grid">
            {images.map(image => {
                return <div className="Asset">
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
