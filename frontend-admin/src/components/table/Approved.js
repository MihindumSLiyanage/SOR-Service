import React from 'react';
import { Badge } from '@windmill/react-ui';

const Approved = ({ isApproved }) => {
    return (
        <>
            <span className="font-serif">
                {isApproved == true && <Badge type="success">Yes</Badge>}
                {isApproved == false && <Badge type="danger">No</Badge>}
            </span>
        </>
    );
};

export default Approved;
