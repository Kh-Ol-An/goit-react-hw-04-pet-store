import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import PetPage from '../Pages/PetPage/PetPage';
import PetsPage from '../Pages/PetsPage/PetsPage';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Route component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
