import React from 'react'
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap'

class DroppedFileListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteModal: false
    }

    this.toggleDelete = this.toggleDelete.bind(this)
  }

  toggleDelete() {
    this.setState({
      deleteModal: !this.state.deleteModal
    })
  }

  render() {
    const f = this.props.file

    return (
      <li>
        <div className="item mb-3">
          <div className="row no-gutters">
            <div className="col-3">
              <img className="img" src="/cliff.jpg" />
            </div>
            <div className="col name">
              {f.name}
            </div>
          </div>
          <div className="row options">
            <div className="col">
              <div className="px-3 py-2 float-right">
                <button className="btn btn-info">View</button>
                <button className="btn btn-danger ml-2" onClick={this.toggleDelete}>Delete</button>
                <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete} className={this.props.className}>
                  <ModalHeader toggle={this.toggleDelete}>Are you sure?</ModalHeader>
                  <ModalFooter>
                    <Button onClick={this.toggleDelete}>No</Button>{' '}
                    <Button color="danger" onClick={this.toggleDelete}>Yes</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default DroppedFileListItem