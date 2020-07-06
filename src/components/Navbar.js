import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {

    return(
        <div className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/games">Games</Link>
            <Link className="nav-link" to="/about">About</Link>
        </div>
    )
}

export default Navbar