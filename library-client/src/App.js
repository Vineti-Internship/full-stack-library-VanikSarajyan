import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Authors from './components/Authors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/authors" exact component={Authors}/>
              <Route component={Error} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
