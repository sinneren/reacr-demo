import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import ListItem from './components/ListItem';
import Footer from './components/Footer';
import Calc from './components/Calc';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/items/:id' component={ListItem} />
          <Route path='/calc/' component={Calc} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

