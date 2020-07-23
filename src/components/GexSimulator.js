import React, { Component } from "react";

export default class GexSimulator extends Component {
  constructor() {
    super();
    this.state = {
      gexText: "This is like *verb* *noun* at *celebrity*'s house!",
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("clicked!")
    const verbs = [
      "partying",
      "killing",
      "playing with",
      "feeding",
      "making love with",
      "cuddling",
      "making fun of",
    ];

    const nouns = [
      "cats",
      "cars",
      "girls",
      "boys",
      "computers",
      "Gex 64 cartridges",
      "Gran Turismo Concept 2002 Tokyo Geneva discs",
    ];

    const celebs = [
      "Marcus",
      "Perestroika Person",
      "Catformer Cat",
      "Mads Mikkelsen",
      "Norman Reedus",
      "Hideo Kojima",
      "Miyazaki",
      "George R.R. Martin",
      "Geoff Keighley",
    ];

    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    let celeb = celebs[Math.floor(Math.random() * celebs.length)];

    this.setState({
        gexText: `This is like ${verb} ${noun} at ${celeb}'s house.`
      })
  }

  render() {
    return (
      <div className="post gex-simulator">
        <p className="gex-quote">
          {this.state.gexText}
        </p>

        <hr className="full-hr" />

        <button className="post-button" onClick={this.handleClick}>
          Create Gex Gag!
        </button>
      </div>
    );
  }
}
