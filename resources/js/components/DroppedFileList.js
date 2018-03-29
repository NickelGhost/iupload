import React from 'react'

import DroppedFileListItem from './DroppedFileListItem.js'

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
            files.map(f => <DroppedFileListItem file={f} />)
          }
        </ul>
      </aside>
    )
  }
}

export default DroppedFileList