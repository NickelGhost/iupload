import React from 'react'

import axios from 'axios'

import { Container } from 'reactstrap'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: {
        name: '',
        url: ''
      }
    }

    axios.get(`/api/images/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          image: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <Container>
          <img className="w-100" src={this.state.image.url} />
        </Container>
      </div>
    )
  }
}

export default Show