import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import ListItem from './components/ListItem';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/items/:id' component={ListItem} />
        </Switch>
      </div>
    );
  }
}

