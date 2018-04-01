import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainNavbar from './MainNavbar.js'

import Homepage from './Homepage.js'

const Show = ({ match }) => (
  <div>
    <h2>Showing {match.params.id}</h2>
  </div>
)

class App extends React.Component {
  render() {
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
    )
  }
}

export default App