import React from 'react'

import Layout from "../components/Layout";
import PostCreator from "../components/PostCreator"
import GexSimulator from "../components/GexSimulator"

import "./pages.css"
import "../components/components.css"

const AppsSite = () => {
    return (
        <div>
            <Layout>
                <h1 className="pcs-h1 h1-link"><a target="_blank" rel="noopener noreferrer" href="https://ano-books.herokuapp.com/">Check out Ano-Books</a></h1>
                <h1 className="pcs-h1">Create your own Markdown post here:</h1>
                <PostCreator />
                <h1 className="pcs-h1">Gex Gag Simulator:</h1>
                <GexSimulator />
            </Layout>
            
        </div>
    )
}

export default AppsSite