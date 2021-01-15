import React from 'react'
import Search from '../../components/Search/Search'
import "./PageLayout.css"

function PageLayout(props) {
    return (
        
        <div className="page_layout">
            <Search />
            {props.children}
        </div>
    )
}

export default PageLayout
