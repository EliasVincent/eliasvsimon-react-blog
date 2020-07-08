import React, { Component } from "react";
import Markdown from "react-markdown";

// this post creator takes in a string from a form, turns it into postContent in state, then outputs the state in React-Markdown
export default class PostCreator extends Component {
  constructor() {
    super();
    this.state = {
      postContent: "",
      isChanged: false,
    };

    // need to be binded manually, don't know why tho
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(this.state);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // prevents reloading
    event.preventDefault();
    console.log("submitted!");
    this.setState({
      isChanged: true,
    });
  }

  render() {
    return (
      <div className="post">
        <div className="post-creator">
          <form
            className={this.state.isChanged ? "hidden-form" : "post-form"}
            onSubmit={this.handleSubmit}
          >
            <input 
              className="post-input"
              type="text"
              onChange={this.handleChange}
              name="boxContent"
              placeholder="type in your own post here.."
            ></input>
            <button className="post-button">Create a post! (local & temporary)</button>
          </form>
          <br />
          <div className="created-post">
            {this.state.isChanged ? (
              <Markdown source={this.state.boxContent} />
            ) : (
              console.log("custom box not created")
            )}
          </div>
        </div>
      </div>
    );
  }
}
