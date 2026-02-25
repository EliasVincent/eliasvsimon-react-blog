import React from 'react'

import Footer from "./Footer"
import Navbar from "./Navbar"

import "./components.css"

const Layout = ({children}) => {
    return (
<div className="layout">
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout