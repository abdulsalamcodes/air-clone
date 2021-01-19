import React, { useContext } from 'react'
import Assets from '../../components/Assets/Assets'
import { CollectionContext } from '../../contexts/CollectionContext'

function SearchPage() {
    const { assets } = useContext(CollectionContext);
    return (
        <div>
            <Assets assets={assets} />
        </div>
    )
}

export default SearchPage
