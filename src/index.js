import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';

import * as serviceWorker from "./serviceWorker";

import "typeface-open-sans"

import Home from "./pages/Home"
import About from "./pages/About"
import Games from "./pages/Games"
import Post from "./pages/Post"
import AppsSite from "./pages/AppsSite"
import NotFound from "./pages/NotFound"

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/apps" component={AppsSite} />
      <Route exact path="/404" component={NotFound} />

      <Route exact path="/post/:id" render={props => <Post {...props} />} />
    </div>
  </Router>,
  document.getElementById('root')
);

//<Route exact path="/" component={App} /> should render the same thing but with React Router
// component={Name of Component specified and imported in import}

serviceWorker.register()