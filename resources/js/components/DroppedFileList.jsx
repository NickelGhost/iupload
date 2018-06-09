import React from 'react';

import DroppedFileListItem from './DroppedFileListItem';

function DroppedFileList({ files }) {
  if (files.length <= 0) {
    return null;
  }
  return (
    <aside>
      <h3>Dropped files</h3>
      <ul className="photo-list">
        {
          files.map(f => <DroppedFileListItem key={f.name} file={f} />)
        }
      </ul>
    </aside>
  );
}

export default DroppedFileList;
