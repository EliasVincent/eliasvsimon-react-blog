import React from 'react'
import { Link } from "react-router-dom"

import "./components.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <Link to="/"><h1>eliasvsimon</h1></Link>
            </div>
            <div className="header-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/games">Games</Link>
                <Link className="nav-link" to="/apps">Apps</Link>
                <Link className="nav-link" to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header