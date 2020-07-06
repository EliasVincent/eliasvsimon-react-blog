import React from 'react'
import { Link } from "react-router-dom"

import "./components.css"

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h1>eliasvsimon blog</h1></Link>
        </div>
    )
}

export default Header