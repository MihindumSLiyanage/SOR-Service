import React from 'react';
import { Badge } from '@windmill/react-ui';

const Status = ({ status }) => {
  return (
    <>
      <span className="font-serif">
        {status === 'Pending' && <Badge type="warning">{status}</Badge>}
        {status === 'Processing' && <Badge type="primary">{status}</Badge>}
        {status === 'Completed' && <Badge type="success">{status}</Badge>}
        {status === 'Cancel' && <Badge type="danger">{status}</Badge>}
      </span>
    </>
  );
};

export default Status;
