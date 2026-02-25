import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {

    const panelStyle = {
        display: 'flex',
        gap: '20px',
        padding: '12px 30px',
        backgroundColor: '#ffffff',
        borderRadius: '50px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        listStyle: 'none',
        margin: 0
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 500,
        transition: 'color 0.2s ease'
    };

    return(
        <div style={panelStyle}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/games">Games</Link>
            <Link style={linkStyle} to="/apps">Apps</Link>
            {/*<a target="_blank" 
            rel="noopener noreferrer"
            href="https://catspace.xyz"
            >Catspace</a>*/}
            <Link style={linkStyle} to="/about">About</Link>
        </div>
    )
}

export default Navbar