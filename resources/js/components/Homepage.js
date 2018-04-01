import React from 'react'

import {
  Col,
  Container,
  Row
} from 'reactstrap'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="mb-4">
              <h2>Latest</h2>
              <Row noGutters>
                <Col md="6" xl="4">
                  <div className="homepage-img-wrapper">
                    <img className="rounded homepage-img" src="/apple.jpg" />
                  </div>
                </Col>
                <Col md="6" xl="4">
                  <div className="homepage-img-wrapper">
                    <img className="rounded homepage-img" src="/cliff.jpg" />
                  </div>
                </Col>
                <Col md="6" xl="4">
                  <div className="homepage-img-wrapper">
                    <img className="rounded homepage-img" src="/phone.jpg" />
                  </div>
                </Col>
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