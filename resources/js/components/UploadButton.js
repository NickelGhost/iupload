import React from 'react'

import axios from 'axios'

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import Dropzone from 'react-dropzone'

import DroppedFileList from './DroppedFileList'

class UploadButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      dropzone: true,
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
      files,
      dropzone: false
    })
    const data = new FormData()
    data.append('file', files[0])
    axios.post('/api/images/upload', data)
      .then((res) => {
        this.setState({
          dropzone: true
        })
        alert('Uploaded')
      })
  }

  render() {
    const dropzone = this.state.dropzone
    const dropzoneText = dropzone ?
      'Click to select a file, or drop one here' :
      'Please wait while the files are being uploaded'

    const files = this.state.files

    return (
      <div>
        <Button className="choose-photo" color="success" onClick={this.toggle}>Choose a photo...</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Upload Photos</ModalHeader>
          <ModalBody>
            <Dropzone className="dropzone mb-4" onDrop={this.onDrop.bind(this)} disabled={!dropzone}>
              <p className="text-center">{dropzoneText}</p>
            </Dropzone>
            <DroppedFileList files={files} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default UploadButton