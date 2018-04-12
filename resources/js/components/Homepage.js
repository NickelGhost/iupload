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
    let imagesJsx = []

    for (const image of this.state.images) {
      const link = '/' + image.name
      imagesJsx.push(
        <Col md="3" xl="2" key={image.url}>
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
          <h2>Uploaded Images</h2>
          <Row noGutters>
            {imagesJsx}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homepage
