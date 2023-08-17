import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contac from './components/Contact';
import Error from './components/Error';
import Nav from './components/Navigation';
import Member from './components/member';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contac} />
            <Route path="/member/:id" component={Member} />
            <Route path="/member" component={Member} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;