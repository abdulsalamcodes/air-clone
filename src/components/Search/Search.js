import React from 'react'
import { FiSearch } from 'react-icons/fi'
import "./Search.css"
function Search() {
    return (
        <div className="search__wrapper">
            <div className="search">
                <FiSearch className="search__icon" />
                <input type="text" name="search" className="search__input" placeholder="Search this workspace" />
            </div>

        </div>
    )
}

export default Search
