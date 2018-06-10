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
            {file.name}
          </div>
        </div>
        <div className="row options">
          <div className="col">
            <div className="px-3 py-1 float-right">
              <Button color="info" href={`/${file.name}`}>View</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DroppedFileListItem;
