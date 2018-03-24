/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Dropzone from 'react-dropzone'

class UploadButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      files: []
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  onDrop(files) {
    this.setState({
      files
    })
  }

  render() {
    return (
      <div>
        <Button className="choose-photo" color="success" onClick={this.toggle}>Choose a photo...</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Upload Photos</ModalHeader>
          <ModalBody>
            <Dropzone className="dropzone mb-4" onDrop={this.onDrop.bind(this)}>
              <p className="text-center">Click to select a file, or drop one here</p>
            </Dropzone>
            <aside>
              <h3>Dropped files</h3>
              <ul className="photo-list">
                {
                  this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default UploadButton