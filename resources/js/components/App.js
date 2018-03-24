import React from 'react'

import MainNavbar from './MainNavbar.js'
import Homepage from './Homepage.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <section>
          <MainNavbar />
        </section>
        <section>
          <Homepage />
        </section>
      </div>
    )
  }
}

export default App