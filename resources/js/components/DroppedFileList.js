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
            files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
          }
        </ul>
      </aside>
    )
  }
}

export default DroppedFileList