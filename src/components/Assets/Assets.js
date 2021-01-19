import React from 'react'
import "./Assets.css"
import Spinner from '../UI/Spinner/Spinner';

function Assets({loading, assets }) {
    const limitText = (text) => {
        if (!text) return null;
        return text.slice(0, 25) + "...";
    }
    // let AssetToDisplay = assets.length > 0 ? assets : [];

    let content = loading ? <Spinner /> : <div className="Asset__Wrapper">
        <header>Assets ({assets.length})</header>
        <div className="Asset__grid">
            {assets.map(image => {
                return <div className="Asset" key={image.id}>
                    <img src={image.urls.small} className="Asset__Image" alt={image.alt_description} />
                    <p className="Asset__Name">{limitText(image.description) || limitText(image.alt_description)}</p>
                </div>
            })}
        </div>
    </div>

    return (
        content
    )
}

export default Assets
