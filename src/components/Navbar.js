import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        // Initial checks
        handleScroll()
        handleResize()
        
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const panelStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '12px 30px',
        backgroundColor: 'rgba(77, 12, 77, 0.95)',
        borderRadius: '50px',
        boxShadow: '0 8px 30px rgba(136, 0, 194, 0.4)',
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        listStyle: 'none',
        margin: 0,
        transition: 'all 0.3s ease',
        flexWrap: 'wrap',
        maxWidth: '90vw'
    };

    const collapsedStyle = {
        ...panelStyle,
        left: '20px',
        right: 'auto',
        transform: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
    };

    const expandedMenuStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '70px',
        left: '20px',
        right: 'auto',
        backgroundColor: 'rgba(77, 12, 77, 0.98)',
        borderRadius: '20px',
        padding: '15px 25px',
        gap: '15px',
        boxShadow: '0 8px 30px rgba(136, 0, 194, 0.5)',
        zIndex: 1001,
        minWidth: '120px'
    };

    const titleStyle = {
        textDecoration: 'none',
        color: '#e9efff',
        fontWeight: 600,
        fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap'
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#d8d8d8',
        fontWeight: 500,
        transition: 'color 0.2s ease',
        fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
        whiteSpace: 'nowrap'
    };

    const menuLinkStyle = {
        ...linkStyle,
        fontSize: '1rem',
        padding: '5px 0'
    };

    // On mobile OR when scrolled, show collapsed button
    const showCollapsed = isMobile || isScrolled

    if (!showCollapsed) {
        return (
            <div style={panelStyle}>
                <Link style={titleStyle} to="/">eliasvsimon</Link>
                <Link style={linkStyle} to="/">Home</Link>
                <Link style={linkStyle} to="/games">Games</Link>
                <Link style={linkStyle} to="/apps">Apps</Link>
                <Link style={linkStyle} to="/about">About</Link>
            </div>
        )
    }

    // Collapsed button on top left
    return (
        <>
            <div 
                style={collapsedStyle} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span style={titleStyle}>eliasvsimon</span>
            </div>
            {isMenuOpen && (
                <div style={expandedMenuStyle}>
                    <Link style={menuLinkStyle} to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link style={menuLinkStyle} to="/games" onClick={() => setIsMenuOpen(false)}>Games</Link>
                    <Link style={menuLinkStyle} to="/apps" onClick={() => setIsMenuOpen(false)}>Apps</Link>
                    <Link style={menuLinkStyle} to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                </div>
            )}
        </>
    )
}

export default Navbar
