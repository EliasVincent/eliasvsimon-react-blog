import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

import "./components.css"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    
    const buttonRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        // Close menu when clicking outside
        const handleClickOutside = (event) => {
            if (
                buttonRef.current && 
                !buttonRef.current.contains(event.target) &&
                menuRef.current && 
                !menuRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false)
            }
        }
        
        // Initial checks
        handleScroll()
        handleResize()
        
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        
        // Only add click listener when menu is open
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

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

    const collapsedLeftStyle = {
        ...panelStyle,
        left: '20px',
        right: 'auto',
        transform: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
    };

    const collapsedCenterStyle = {
        ...panelStyle,
        padding: '10px 20px',
        cursor: 'pointer'
    };

    const expandedMenuLeftStyle = {
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
        minWidth: '120px',
        opacity: isMenuOpen ? 1 : 0,
        transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
        pointerEvents: isMenuOpen ? 'auto' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease'
    };

    const expandedMenuCenterStyle = {
        ...expandedMenuLeftStyle,
        left: '50%',
        transform: isMenuOpen ? 'translateX(-50%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-10px) scale(0.95)'
    };

    const inlineTitleStyle = {
        fontSize: 'clamp(0.9rem, 3vw, 1.2rem)'
    };

    const inlineLinkStyle = {
        fontSize: 'clamp(0.85rem, 2.5vw, 1rem)'
    };

    const menuLinkStyle = {
        fontSize: '1rem',
        padding: '5px 0'
    };

    // Desktop, not scrolled: full navbar
    if (!isMobile && !isScrolled) {
        return (
            <div style={panelStyle}>
                <Link className="navbar-title" style={inlineTitleStyle} to="/">eliasvsimon</Link>
                <Link className="navbar-link" style={inlineLinkStyle} to="/">Home</Link>
                <Link className="navbar-link" style={inlineLinkStyle} to="/games">Games</Link>
                <Link className="navbar-link" style={inlineLinkStyle} to="/apps">Apps</Link>
                <Link className="navbar-link" style={inlineLinkStyle} to="/about">About</Link>
            </div>
        )
    }

    // Mobile at top (not scrolled): collapsed centered
    if (isMobile && !isScrolled) {
        return (
            <>
                <div 
                    ref={buttonRef}
                    style={collapsedCenterStyle} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="navbar-title" style={inlineTitleStyle}>eliasvsimon</span>
                </div>
                <div ref={menuRef} style={expandedMenuCenterStyle}>
                    <Link className="navbar-link" style={menuLinkStyle} to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link className="navbar-link" style={menuLinkStyle} to="/games" onClick={() => setIsMenuOpen(false)}>Games</Link>
                    <Link className="navbar-link" style={menuLinkStyle} to="/apps" onClick={() => setIsMenuOpen(false)}>Apps</Link>
                    <Link className="navbar-link" style={menuLinkStyle} to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                </div>
            </>
        )
    }

    // Desktop scrolled OR Mobile scrolled: collapsed on top left
    return (
        <>
            <div 
                ref={buttonRef}
                style={collapsedLeftStyle} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="navbar-title" style={inlineTitleStyle}>eliasvsimon</span>
            </div>
            <div ref={menuRef} style={expandedMenuLeftStyle}>
                <Link className="navbar-link" style={menuLinkStyle} to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link className="navbar-link" style={menuLinkStyle} to="/games" onClick={() => setIsMenuOpen(false)}>Games</Link>
                <Link className="navbar-link" style={menuLinkStyle} to="/apps" onClick={() => setIsMenuOpen(false)}>Apps</Link>
                <Link className="navbar-link" style={menuLinkStyle} to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>
        </>
    )
}

export default Navbar
