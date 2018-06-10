import React from 'react';

import axios from 'axios';

import {
  Col,
  Container,
  Row,
} from 'reactstrap';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    axios.get('/api/images')
      .then((res) => {
        this.setState({
          images: res.data,
        });
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Container>
          <h2>Uploaded Images</h2>
          <Row noGutters>
            {images.map(image => (
              <Col md="3" xl="2" key={image.url}>
                <div className="homepage-img-wrapper">
                  <a href={`/${image.name}`}>
                    <img className="rounded homepage-img" src={image.url} alt="" />
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Homepage;
