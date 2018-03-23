import React from 'react'

import {
  Col,
  Container,
  Row
} from 'reactstrap';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Latest</h2>
              <Row>
                <Col md="6" xl="4">
                  <img className="rounded homepage-img" src="/apple.jpg" />
                </Col>
                <Col md="6" xl="4">
                  <img className="rounded homepage-img" src="/cliff.jpg" />
                </Col>
                <Col md="6" xl="4">
                  <img className="rounded homepage-img" src="/phone.jpg" />
                </Col>
              </Row>
            </Col>
            <Col>
              <h2>Most popular</h2>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homepage;