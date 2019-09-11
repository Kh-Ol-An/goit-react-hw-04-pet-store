import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Nav from './Nav/Nav';
import Loader from './Loader';
import fade from '../transitions/transition.module.css';
// import AsyncAbout from '../Pages/AboutPage/AboutPage';
// import AsyncHome from '../Pages/HomePage/HomePage';
// import AsyncPet from '../Pages/PetPage/PetPage';
// import AsyncPets from '../Pages/PetsPage/PetsPage';

const AsyncHome = Loadable({
  loader: () =>
    import('../Pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timedOut: 5000,
  pastDelay: 200,
});

const AsyncAbout = Loadable({
  loader: () =>
    import('../Pages/AboutPage/AboutPage' /* webpackChunkName: "about-page" */),
  loading: Loader,
  timedOut: 5000,
  pastDelay: 200,
});

const AsyncPet = Loadable({
  loader: () =>
    import('../Pages/PetPage/PetPage' /* webpackChunkName: "pet-page" */),
  loading: Loader,
  timedOut: 5000,
  pastDelay: 200,
});

const AsyncPets = Loadable({
  loader: () =>
    import('../Pages/PetsPage/PetsPage' /* webpackChunkName: "pets-page" */),
  loading: Loader,
  timedOut: 5000,
  pastDelay: 200,
});

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames={fade}>
                <Switch>
                  <Route path="/" exact component={AsyncHome} />
                  <Route path="/about" component={AsyncAbout} />
                  <Route path="/pets/:id" component={AsyncPet} />
                  <Route path="/pets" component={AsyncPets} />
                  <Route component={AsyncHome} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </>
    </Router>
  );
}

export default App;
