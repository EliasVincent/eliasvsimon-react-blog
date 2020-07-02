import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <p>&copy; <a href="https://github.com/EliasVincent">EliasVincent</a> {new Date().getFullYear()}.
                </p>
                <p><small>Significant parts of this React App are from willjw3's series on a React Blog Home Page with Markdown. <a href= "https://developer-log.netlify.app/">visit his website</a></small></p>
            </div>
        )
    }
}
