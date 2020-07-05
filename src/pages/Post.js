import React from 'react'
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"

import Layout from "../components/Layout"

import postList from "../posts.json"

import "./pages.css"

// this now basically acts as boilerplate code for dynamically generated pages
const Post = (props) => {
    //console.log(props.match.params.id)
    // in console log we find out it has a match.params.id thing

    // now we need to make sure they're valid IDs
    // when Id is a string it will return NaN
    const validId = parseInt(props.match.params.id)
    //console.log(validId)
    if (!validId) {
        // React-Router Redirect Feature
        return <Redirect to="/404"/>
    }

    // create obj to bring data in
    const fetchedPost = {}
    let postExists = false
    // loop over postlist and assign object keys
    postList.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title?? 😶"
            fetchedPost.author = post.author ? post.author : "No author?? 😶"
            fetchedPost.date = post.date ? post.date : "No date?? 😶"
            fetchedPost.content = post.content ? post.content : "No content? Now Elias really screwed up this one.."

            postExists = true
        }
    })

    if (postExists === false) {
        return <Redirect to="/404" />
    }


    return(
        <Layout>
            <div className="post">
                <div className="post-title">
                    <h1>{fetchedPost.title}</h1>
                    <small>Spawned into existence by {fetchedPost.title} on {fetchedPost.date}</small>
                    <hr />
                </div>
                <br />
                <Markdown
                source={fetchedPost.content} 
                escapeHtml={false}
                />
            </div>
        </Layout>
    )
}

export default Post