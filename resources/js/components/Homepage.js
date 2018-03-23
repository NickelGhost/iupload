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