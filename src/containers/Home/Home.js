import React from 'react'
import Assets from '../../components/Assets/Assets'
import Boards from '../../components/Boards/Boards'
import Label from '../../components/Labels/Labels'
import { labelArray, Row2Column, smartTagArray } from '../../shared'

function Home() {
    return (
        <div>
            {/* Recently Viewed Boards */}
            <Boards heading="Jump back In" sub_heading="RECENTLY VIEWED" />
            {/* Recent Updates in Boards */}
            <Boards heading="Recent updates in the Demo" sub_heading="Boards" />
            {/* Labels */}
            <Row2Column>
                <Label heading="Labels" dataArray={labelArray} />
                <Label heading="Smart Tags" dataArray={smartTagArray} />
            </Row2Column>

            {/* Assets */}

            <Assets />
        </div>
    )
}

export default Home
