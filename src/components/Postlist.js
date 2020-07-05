import React from 'react'
import { Link } from "react-router-dom"
import Markdown from "react-markdown"

import postlist from "../posts.json"

import "./components.css"

const PostList = () => {
    //console.log(postlist)
    const snippetList = postlist.map(post => {
        return post.content.split(" ").slice(0, 15).join(" ")
    })

    console.log(snippetList)
    return (
        <div className="postlist">

            <h1 className="title">Posts</h1>

            {postlist.length &&
                postlist.map((post, i) => {
                    // use index i as key, otherwise React would be mad
                    return (
                        <div key={i} className="post-element">
                            <h2><Link className="link" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <small>On {post.date} by {post.author}</small>
                            <hr/>

                            {/* pass Markdown text in as props, and make HTML thing render properly (like iframes/embeds) */}
                            <Markdown 
                            source={snippetList[i]} 
                            escapeHtml={false}
                            />

                            <small><Link className="link" to={`/post/${post.id}`}>View Post</Link></small>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PostList