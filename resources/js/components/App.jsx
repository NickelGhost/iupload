import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MainNavbar from './MainNavbar';

import Homepage from './Homepage';
import Show from './Show';

function App() {
  return (
    <Router>
      <div>
        <section>
          <MainNavbar />
        </section>
        <section>
          <Route exact path="/" component={Homepage} />
          <Route path="/:id" component={Show} />
        </section>
      </div>
    </Router>
  );
}

export default App;
