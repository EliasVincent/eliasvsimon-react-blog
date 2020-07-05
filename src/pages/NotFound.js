import React from 'react'

import Layout from "../components/Layout"

import "./pages.css"

const NotFound = () => {
    return (
        <div>
            <Layout>
                <h1 className="notfound">404!? :(</h1>
                <h1>But hey, welcome to my site!</h1>
            </Layout>
        </div>
    )
}

export default NotFound