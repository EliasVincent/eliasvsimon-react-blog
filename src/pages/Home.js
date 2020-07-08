import React from 'react'

import Layout from "../components/Layout"
import PostList from "../components/Postlist"
import PostCreator from "../components/PostCreator"
// since this is in pages folder use pages.css
import "./pages.css"

// what would also work:
//class Home extends React.Component {}
//function Home() {}
const Home = () => {
    return(
        <div>
            <Layout>
                <PostList />
                <h1>Create your own Markdown post here:</h1>
                <PostCreator />
            </Layout>
        </div>
    )
}

export default Home