import React, { useContext } from 'react'
import Assets from '../../components/Assets/Assets'
import Boards from '../../components/Boards/Boards'
import Label from '../../components/Labels/Labels'
import { CollectionContext } from '../../contexts/CollectionContext';
import { labelArray, Row2Column, smartTagArray } from '../../shared'

function Home() {
    const { assets, loading, loadingA } = useContext(CollectionContext);
    
    return (
        <div>
            {/* <Boards heading="Jump back In" sub_heading="RECENTLY VIEWED" /> */}
            <Boards heading="Recent updates in the Demo" sub_heading="Boards" loading={loadingA} />
            <Row2Column>
                <Label heading="Labels" dataArray={labelArray} />
                <Label heading="Smart Tags" dataArray={smartTagArray} />
            </Row2Column>
            <Assets loading={loading} assets={assets} />
        </div>
    )
}

export default Home
