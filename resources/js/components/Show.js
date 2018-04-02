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
    const image = this.state.image
    return (
      <div>
        <Container>
          <h2>{image.name}</h2>
          <img className="w-100" src={image.url} />
        </Container>
      </div>
    )
  }
}

export default Show