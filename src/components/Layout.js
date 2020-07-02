import React from 'react'

import Header from "./Header"
import Footer from "./Footer"

import "./components.css"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout