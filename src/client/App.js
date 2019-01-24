import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home.js';
import About from './views/About.js';
import Privacy from './views/Privacy.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <div className="maincontainer">
                <Home />
              </div>
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <div className="maincontainer">
                <About />
              </div>
            )}
          />

          <Route
            exact
            path="/privacy"
            render={() => (
              <div className="maincontainer">
                <Privacy />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
