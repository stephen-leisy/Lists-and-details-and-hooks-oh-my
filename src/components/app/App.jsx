import React from 'react';
import RickAndMortyContainer from '../../containers/RickAndMortyContainer';
import Detail from '../../containers/Detail';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={RickAndMortyContainer} />
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
