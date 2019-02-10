import React from 'react';

import { Button } from 'reactstrap';

function DroppedFileListItem({ file }) {
  return (
    <li>
      <div className="item mb-3">
        <div className="row no-gutters">
          <div className="col-3">
            <img className="img" src={file.thumbnail} alt="user upload" />
          </div>
          <div className="col name">
            <div>
              {file.name}
            </div>
            <Button color="info" href={`/${file.name}`}>View</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DroppedFileListItem;
