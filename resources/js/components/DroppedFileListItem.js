import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class DroppedFileListItem extends React.Component {
  render() {
    const f = this.props.file

    return (
      <li key={f.name}>
        <div className="item mb-3">
          <div className="row no-gutters">
            <div className="col-3">
              <img className="img" src="/cliff.jpg" />
            </div>
            <div className="col name">
              {f.name} - {f.size} bytes
            </div>
          </div>
          <div className="row options">
            <div className="col">
              <div class="px-3 py-2 float-right">
                <button className="btn btn-info">View</button>
                <button className="btn btn-danger ml-2">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default DroppedFileListItem