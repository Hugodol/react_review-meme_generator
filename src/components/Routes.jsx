/* START SOLUTION */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Generator from './Generator';
import MyMemes from './MyMemes';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      myMemes: [],
    };
    this.setMyMeme = this.setMyMeme.bind(this);
  }

  setMyMeme(url, text) {
    const myMemes = [...this.state.myMemes];
    myMemes.push({
      url,
      text,
    });
    this.setState({ myMemes });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Generator setMyMeme={this.setMyMeme} />
          )}
          />
          <Route
            path="/mymemes"
            render={() => (
              <MyMemes myMemes={this.state.myMemes} />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;

/* ELSE
// Routes Component
  // Defines React Router Routes for Generator and MyMemes
END SOLUTION */
