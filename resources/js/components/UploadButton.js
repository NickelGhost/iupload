/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className="choose-photo" color="success" onClick={this.toggle}>Choose a photo...</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Upload Photos</ModalHeader>
          <ModalBody>
            Placeholder
          </ModalBody>
          <ModalFooter>
            <Button className="choose-photo" color="success" onClick={this.toggle}>Upload</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UploadButton;