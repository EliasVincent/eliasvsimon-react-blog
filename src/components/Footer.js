import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <p>&copy; EliasVincent {new Date().getFullYear()}. <a href="https://github.com/EliasVincent">Github</a> | <a href="https://eliasvsimon.com/feed.xml">RSS</a>
                </p>
            </div>
        )
    }
}
