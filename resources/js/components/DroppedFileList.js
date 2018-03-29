import React from 'react'

class DroppedFileList extends React.Component {

  render() {
    const files = this.props.files

    if (files.length <= 0) {
      return null
    }

    return (
      <aside>
        <h3>Dropped files</h3>
        <ul className="photo-list">
          {
            files.map(f => (
              <li key={f.name}>
                <div className="item mb-2">
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
            ))
          }
        </ul>
      </aside>
    )
  }
}

export default DroppedFileList