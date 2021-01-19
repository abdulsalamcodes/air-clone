import React, { useState } from 'react'
import "./Assets.css"
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import axios from '../../axios-photos';

function Assets({ loading, assets }) {
    const [showModal, setShowModal] = useState(false);
    const [loadingAsset, setLoadingAsset] = useState(true);
    const [asset, setAsset] = useState('');

    const limitText = (text) => {
        if (!text) return null;
        return text.slice(0, 25) + "...";
    }

    const showPhotoDetail = (id) => {
        axios.get(`/photos/${id}`)
            .then(res => {
                console.log(res.data)
                setAsset(res.data)
                setLoadingAsset(false)
            })
            .catch(error => {
                console.log(error)
            })

        setShowModal(true)
    }

    const hidePhotoDetail = () => {
        setLoadingAsset(true)
        setAsset("")
        setShowModal(false);
    }

    let content = loading ? <Spinner /> : <div className="Asset__Wrapper">
        {showModal && <Modal clicked={hidePhotoDetail} show={showModal}>
            <div className="AssetModal">
                {loadingAsset ? <Spinner /> : <>
                    <img loading="lazy" src={asset.urls.regular} alt={asset.alt_description} />
                    <div className="title">
                    <h3 >{asset.alt_description}</h3>
                    <h6>{asset.description}</h6>
                    </div>
                </>}
            </div>
        </Modal>}

        <header>Assets ({assets.length})</header>
        <div className="Asset__grid">
            {assets.map(image => {
                return <div onClick={() => showPhotoDetail(image.id)} className="Asset" key={image.id}>
                    <img loading="lazy" src={image.urls.small} className="Asset__Image" alt={image.alt_description} />
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
