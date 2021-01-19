import React from 'react'
import "./Navigation.css";
import { NavLink } from 'react-router-dom'
import { BiHomeAlt } from "react-icons/bi";
import { FiDownload, FiSearch } from "react-icons/fi";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import Logo from "../../assets/air-logo.png"
import ToolTip from '../UI/ToolTip/ToolTip';


function Navigation() {
    return (
        <div className="navbar">
            <div>
                <button className="logo">
                    <img src={Logo} alt="Air Clone Logo" className="logo__image" />
                </button>
                <ToolTip content="Home">
                    <NavLink exact to="/">
                        <BiHomeAlt />
                    </NavLink>
                </ToolTip>
                <ToolTip content="Search">
                    <NavLink to="/search">
                        <FiSearch />
                    </NavLink>
                </ToolTip>
                <ToolTip content="Workspace Boards">
                    <NavLink  to="/workspace-boards">
                        <RiLayoutMasonryLine />
                    </NavLink>
                </ToolTip>
                <ToolTip content="Bookmark">
                    <NavLink exact to="/bookmark">
                        <BsBookmark />
                    </NavLink>

                </ToolTip>
            </div>

            <div>
                <button className="action_btn" to="/notifications">
                    <IoNotificationsOutline />
                </button>
                <button className="action_btn" to="/imports">
                    <FiDownload />
                </button>
                <button className="action_btn" to="/help">
                    <AiOutlineQuestion />
                </button>
            </div>
        </div>
    )
}

export default Navigation
