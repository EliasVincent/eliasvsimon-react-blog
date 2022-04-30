import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <p>&copy; EliasVincent {new Date().getFullYear()}. <a href="https://github.com/EliasVincent">Github</a>
                </p>
            </div>
        )
    }
}
