import React from 'react'

import Layout from "../components/Layout";
import PostCreator from "../components/PostCreator"

import "./pages.css"
import "../components/components.css"

const PostCreatorSite = () => {
    return (
        <div>
            <Layout>
                <h1 className="pcs-h1">Create your own Markdown post here:</h1>
                <PostCreator />
            </Layout>
            
        </div>
    )
}

export default PostCreatorSite