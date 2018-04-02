import React from 'react'

import axios from 'axios'

import {
  Col,
  Container,
  Row
} from 'reactstrap'

class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }

    axios.get('/api/images')
      .then((res) => {
        this.setState({
          images: res.data
        })
      })
  }

  render() {
    let latest = []

    for (const image of this.state.images) {
      const link = '/' + image.name
      latest.push(
        <Col md="6" xl="4">
          <div className="homepage-img-wrapper">
            <a href={link}>
              <img className="rounded homepage-img" src={image.url} />
            </a>
          </div>
        </Col>
      )
    }

    return (
      <div>
        <Container>
          <Row>
            <Col className="mb-4">
              <h2>Latest</h2>
              <Row noGutters>
                {latest}
              </Row>
            </Col>
            <Col className="mb-4">
              <h2>Most popular</h2>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homepage