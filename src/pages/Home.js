import React from 'react'

import Layout from "../components/Layout"
import PostList from "../components/Postlist"
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
            </Layout>
        </div>
    )
}

export default Home